import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import MarksRow from "../components/MarksRow";

function ResultPageStudent() {
   const params = useParams();
   console.log(params);
   const navigate = useNavigate();
   const [subjects, setSubjects] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const { token } = useSelector((state) => state.users);

   const fetchData = async () => {
      try {
         setIsLoading(true);
         const response = await axios.get("/marks/view/", {
            headers: {
               authorization: `Token ${token}`,
            },
            params: {
               student: params.id,
               exam: params.semid,
            },
         });
         setSubjects(response?.data);
         setIsLoading(false);
      } catch (err) {
         console.log(err);
      }
   };
   const confirmChangesHandler = async () => {
      try {
         let formdata = new FormData();
         formdata.append('id', subjects?.marksheet_id);
         await axios.post(
            "/mark/confirm/",
            formdata,
            {
               headers: {
                  authorization: `Token ${token}`,
               },
            }
         );
         fetchData();
      } catch (err) {
         console.log(err);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div>
         <div className="container p-2 mx-auto sm:p-4 ">
            <div className="flex justify-between px-9">
               <h2 className="mb-4 text-2xl  font-semibold leading-tight capitalize">
                  MarkSheet
                  {subjects?.mark_list?.length > 0 && ` - ${subjects?.student} - ${subjects?.course}`}
               </h2>
               <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => navigate(-1)}
               >
                  Back
               </button>
            </div>
            <h3 className="mb-4 text-xl pl-9 pb-5 font-semibold leading-tight text-zinc-600 capitalize">
               {subjects?.exam}
            </h3>
            {
               subjects?.status === "Rejected" && <p className="pl-9 text-red-600">MarkSheet has been rejected by the faculty! Make necessary corrections.</p>
            }
            {subjects?.mark_list?.length < 1 ? (
               <div className="flex justify-center py-10">
                  <p className="text-gray-400">No Data Found</p>
               </div>
            ) : (
               <div className="overflow-x-auto px-11 flex mt-5 justify-center items-center">
                  <table className="min-w-full text-xs">
                     <thead className="">
                        <tr className="text-left text-base text-zinc-600">
                           <th className="p-3">Subject Code</th>
                           <th className="p-3">Subject</th>
                           <th className="p-3">Grade</th>
                           <th className="p-3">Grade Point</th>
                           <th className="p-3">Credit</th>
                           <th className="p-3">Mark</th>
                           <th className="p-3">Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        {subjects?.mark_list?.map((item, index) => (
                           <MarksRow key={index} item={item} status={subjects?.status} />
                        ))}
                     </tbody>
                     <tfoot >
                        <tr>
                           <td className="px-2 py-4">
                              <span className="text-base font-semibold p-2 mt-2">SGPA: </span>
                              <span className="text-base ">{subjects?.sgpa}</span>
                           </td>
                        </tr>
                     </tfoot>
                  </table>
               </div>
            )}
         </div>
         {
            subjects?.status === "Rejected" &&
            <div className="flex justify-center">
               <button onClick={confirmChangesHandler} className="p-2 rounded-md bg-green-600 text-white">Confirm Changes</button>
            </div>
         }
      </div>
   );
}


export default ResultPageStudent