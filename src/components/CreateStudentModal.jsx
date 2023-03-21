import React, { useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { useHandleClickOutside } from "../hooks";

function CreateStudentModal({ setIsCreateModalView }) {
   const wrapperRef = useRef();
   useHandleClickOutside(wrapperRef, () => setIsCreateModalView(false));

   return (
      <div className="fixed inset-0 w-full h-full lightglass flex items-center justify-center z-20 ">
         <div
            ref={wrapperRef}
            className="bg-[#fff] w-full max-h-[90vh] max-w-[500px]  shadow-[0_1rem_3rem_rgb(0_0_0_/_18%)] overflow-y-auto"
         >
            <div className="flex items-center justify-between border-b p-4">
               <h2 className="font-medium mb-2">Deposit</h2>
               <button
                  className="h-auto bg-transparent text-textColor text-xl"
                  onClick={() => setIsCreateModalView(false)}
               >
                  <MdClose />
               </button>
            </div>
         </div>
      </div>
   );
}

export default CreateStudentModal;
