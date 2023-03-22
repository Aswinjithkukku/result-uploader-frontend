import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageLoader from "../components/PageLoader";
import { useNavigate } from "react-router-dom";

function StudentListPage() {
   const navigate = useNavigate();
   const [students, setStudents] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const { token, user } = useSelector((state) => state.users);

   const fetchData = async () => {
      try {
         setIsLoading(true);
         const response = await axios.get("/list/student/", {
            headers: {
               authorization: `Token ${token}`,
            },
         });
         setStudents(response?.data);
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
         <div className="max-w-screen-xl p-2 mx-auto sm:p-4 ">
            <div className="flex justify-between items-center pr-9">
               <h2 className="mb-4 text-2xl pl-9 pb-5 font-semibold leading-tight text-gray-400">
                  Student List - {user?.username}
               </h2>
               <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => navigate(-1)}
               >
                  Back
               </button>
            </div>

            <div className="overflow-x-auto px-11 flex my-10 justify-center items-center">
               <div className="relative overflow-x-auto w-full">
                  {isLoading ? (
                     <PageLoader />
                  ) : (
                     <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                           <tr>
                              <th scope="col" className="px-6 py-3">
                                 Register Number
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Student Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 <p>&nbsp;</p>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {students?.map((item) => (
                              <tr key={item?.id} className="bg-white border-b ">
                                 <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                 >
                                    {item?.registration_no}
                                 </th>
                                 <td className="px-6 py-4">{item?.name}</td>
                                 <td className="px-6 py-4">
                                    <button
                                       onClick={() =>
                                          navigate(`/${item?.id}/examlist`)
                                       }
                                       type="button"
                                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                       View Result
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default StudentListPage;
