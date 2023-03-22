import axios from "../axios";
import React, { useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useHandleClickOutside } from "../hooks";
import BtnLoader from "./BtnLoader";

function CreateStudentModal({ setIsCreateModalView }) {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");
   const [username, setUsername] = useState("");
   const [name, setName] = useState("");
   const [registration_no, setRegistration_no] = useState("");

   const wrapperRef = useRef();
   useHandleClickOutside(wrapperRef, () => setIsCreateModalView(false));

   const { token } = useSelector((state) => state.users);

   const submitHandler = async (e) => {
      try {
         e.preventDefault();
         setIsLoading(true);
         await axios.post(
            "/create/student/",
            { username, registration_no, name },
            {
               headers: {
                  authorization: `Token ${token}`,
               },
            }
         );
         setIsLoading(false);
         Swal.fire("Good job!", "You clicked the button!", "success");
      } catch (err) {
         setError(err?.response?.data?.error);
         setIsLoading(false);
      }
   };

   return (
      <div className="fixed inset-0 w-full h-full bg-gray-100/50 flex items-center justify-center z-20 ">
         <div
            ref={wrapperRef}
            className="bg-[#fff] w-full rounded-md max-h-[90vh] max-w-[500px]  shadow-[0_1rem_3rem_rgb(0_0_0_/_18%)] overflow-y-auto"
         >
            <div className="flex items-center justify-between border-b p-4 bg-blue-300 text-white">
               <h2 className="font-medium mb-2">Create Student</h2>
               <button
                  className="h-auto bg-transparent text-textColor text-xl"
                  onClick={() => setIsCreateModalView(false)}
               >
                  <MdClose />
               </button>
            </div>
            <form onSubmit={submitHandler}>
               <div className="mx-10 my-5 space-y-2">
                  <div className="">
                     <label htmlFor="" className="text-[14px]">
                        Username *
                     </label>
                     <input
                        className="border w-full rounded outline-none focus:border-green-400 p-2"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
                  <div className="">
                     <label htmlFor="" className="text-[14px]">
                        Name *
                     </label>
                     <input
                        className="border w-full rounded outline-none focus:border-green-400 p-2"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
                  <div className="">
                     <label htmlFor="" className="text-[14px]">
                        Registration Number *
                     </label>
                     <input
                        className="border w-full rounded outline-none focus:border-green-400 p-2"
                        type="text"
                        value={registration_no}
                        onChange={(e) => setRegistration_no(e.target.value)}
                     />
                  </div>
                  {error && (
                     <p className="pt-2 text-[12px] text-red-500">{error}</p>
                  )}
                  <div className="flex justify-center pt-5">
                     <button
                        type="submit"
                        className="px-5 py-2 rounded bg-blue-300 text-white uppercase text-[12px] font-[600]"
                     >
                        {isLoading ? <BtnLoader /> : "Create"}
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default CreateStudentModal;
