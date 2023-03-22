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

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div>
         <div className="container p-2 mx-auto sm:p-4 ">
            <h2 className="mb-4 text-2xl pl-9  font-semibold leading-tight capitalize">
               MarkSheet
               {subjects?.mark_list?.length > 0 && ` - ${subjects?.student} - ${subjects?.course}`}
            </h2>
            <h3 className="mb-4 text-xl pl-9 pb-5 font-semibold leading-tight text-zinc-600 capitalize">
               {subjects?.exam}
            </h3>
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
                              <p>{item?.credit_point}</p>
                           </td>
                           <td className="p-3">
                              <p>{item?.credit}</p>
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
               )}
         </div>
      </div>
   );
}

export default ResultPage;
