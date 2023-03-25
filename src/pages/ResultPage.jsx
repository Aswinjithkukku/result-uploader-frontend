import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ResultPage() {
   const params = useParams();
   console.log(params);
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

   const approveRejectDoc = async (status) => {
      try {
         setIsLoading(true);
         const response = await axios.post("/marksheet/status/",
            {
               status,
               marksheet: subjects.marksheet_id
            },
            {
               headers: {
                  authorization: `Token ${token}`,
               },
            });
         console.log(response?.data);
         fetchData()
         setIsLoading(false);
      } catch (err) {
         console.log(err?.response?.data[0]);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div>
         <div className="container p-2 mx-auto sm:p-4 ">
            <div className="flex justify-between">
               <h2 className="mb-4 text-2xl pl-9  font-semibold leading-tight capitalize">
                  MarkSheet
                  {subjects?.mark_list?.length > 0 && ` - ${subjects?.student} - ${subjects?.course}`}
               </h2>
               <div className="mr-4">
                  {
                     subjects.status === "Pending" ? <>
                        <button onClick={() => approveRejectDoc("Approve")} className="bg-green-600 p-2 rounded-md text-white mr-2">Approve</button>
                        <button onClick={() => approveRejectDoc("Reject")} className="bg-red-600 p-2 rounded-md text-white">Reject</button>
                     </>
                        : <button className={`border p-2 rounded-md ${subjects?.status === "Approved" ? "text-green-600 border-green-600" : "text-red-600 border-red-600"}`}>{subjects?.status}</button>
                  }
               </div>
            </div>
            <h3 className="mb-4 text-xl pl-9 pb-5 font-semibold leading-tight text-zinc-600 capitalize">
               {subjects?.exam}
            </h3>
            {subjects?.mark_list?.length < 1 ? (
               <div className="flex justify-center py-10">
                  <p className="text-gray-400">No Data Found</p>
               </div>
            ) : (
               <>
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
                           {subjects?.mark_list?.map((item) => (
                              <tr
                                 key={item.id}
                                 className="border-b border-opacity-20  h-16"
                              >
                                 <td className="p-3">
                                    <p>{item?.subject_code}</p>
                                 </td>
                                 <td className="p-3">
                                    <p>{item?.subject_name}</p>
                                 </td>
                                 <td className="p-3">
                                    <p>{item?.grade}</p>
                                 </td>
                                 <td className="p-3">
                                    <p>{item?.grade_point}</p>
                                 </td>
                                 <td className="p-3">
                                    <p>{item?.credit}</p>
                                 </td>
                                 <td className="p-3">
                                    <p>{item?.credit_point}</p>
                                 </td>
                                 <td className="p-3">
                                    {item?.status === "Passed" ? (
                                       <p className="font-bold text-green-700 capitalize">
                                          {item?.status}
                                       </p>
                                    ) : item?.status === "Failed" ? (
                                       <p className="font-bold text-red-700 capitalize">
                                          {item?.status}
                                       </p>
                                    ) : (
                                       ""
                                    )}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>

                  </div>
                  <div className="mt-6 flex justify-center align-middle">
                     <a href={process.env.REACT_APP_SERVER_URL + subjects?.marksheet_doc} className="bg-blue-500 px-4 py-2 rounded text-white">View PDF</a>
                  </div>
               </>
            )}
         </div>
      </div>
   );
}

export default ResultPage;
