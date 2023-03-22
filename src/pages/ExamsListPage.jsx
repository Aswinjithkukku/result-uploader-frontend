import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function ExamsListPage() {
   const navigate = useNavigate();
   const params = useParams()
   const [exams, setExams] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const { token, user } = useSelector((state) => state.users);

   const fetchExams = async () => {
      try {
         setIsLoading(true);
         const response = await axios.get("/dropdown/exam/", {
            headers: {
               authorization: `Token ${token}`,
            },
         });
         setExams(response?.data);
         setIsLoading(false);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchExams();
   }, []);

   return (
      <div className="max-w-screen-xl mx-auto">
         <div className="flex justify-between items-center pr-9">
            <h2 className="mb-4 text-2xl pl-9 pb-5 font-semibold leading-tight text-gray-400">
               Student - {user?.username}
            </h2>
            <button
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
               onClick={() => navigate(-1)}
            >
               Back
            </button>
         </div>
         <div className="space-y-4">
            {exams?.map((item) => (
               <div key={item?.id} className="bg-gray-100/50 shadow-lg py-7 w-full rounded-lg"
               onClick={() => navigate(`/${params.id}/semester/${item?.id}`)}
               >
                  <p className="text-center text-lg font-[700] text-gray-500 uppercase">
                     {item?.exam_name}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ExamsListPage;
