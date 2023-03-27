import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HiUserAdd, HiUserGroup } from "react-icons/hi";
import CreateStudentModal from "../components/CreateStudentModal";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
   const navigate = useNavigate();

   const [isCreateModalView, setIsCreateModalView] = useState(false);
   const { user } = useSelector((state) => state.users);

   return (
      <div className="max-w-screen-xl mx-auto">
         <div className="h-10 flex items-center shadow w-full rounded-lg px-3">
            <div className="flex gap-3 ">
               <div className="sm:flex gap-3">
                  <p className="text-gray-300 font-[700] uppercase text-[600]">
                     Student:
                  </p>
                  <p className="text-gray-400 font-[700] uppercase text-[600]">
                     {user?.username}
                  </p>
               </div>
               <div className="sm:flex gap-3">
                  <p className="text-gray-300 font-[700] uppercase text-[600]">
                     Course:
                  </p>
                  <p className="text-gray-400 font-[700] uppercase text-[600]">
                     {user?.course}
                  </p>
               </div>
            </div>
         </div>
         <div className="mt-10">
            <div className="sm:grid grid-cols-2 px-4 gap-10">
               <div
                  className="flex justify-between p-7 bg-blue-300 rounded-lg shadow-lg cursor-pointer mb-2"
                  onClick={() => navigate(`/${user?.profile_id}/examlist`)}
               >
                  <div className="space-y-2">
                     <p className="uppercase font-[800] text-xl text-white">
                        View Semester
                     </p>
                     <p className="uppercase font-[800] text-xs underline text-white">
                        click here to see details
                     </p>
                  </div>
                  <div className="text-6xl text-white">
                     <HiUserGroup />
                  </div>
               </div>
               <div
                  className="flex justify-between p-7 bg-white rounded-lg shadow-lg cursor-pointer mb-2"
                  onClick={() => navigate("/marksheet-upload")}
               >
                  <div className="space-y-2">
                     <p className="uppercase font-[800] text-xl text-blue-300">
                        Upload Marklist
                     </p>
                     <p className="uppercase font-[800] text-xs underline text-blue-300">
                        click here to upload marklist
                     </p>
                  </div>
                  <div className="text-6xl text-blue-300">
                     <HiUserAdd />
                  </div>
               </div>
            </div>
            {isCreateModalView && (
               <CreateStudentModal
                  setIsCreateModalView={setIsCreateModalView}
               />
            )}
         </div>
      </div>
   );
}

export default StudentDashboard;
