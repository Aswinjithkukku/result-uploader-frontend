import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { logoutUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useHandleClickOutside } from "../hooks";
import ChangePasswordModal from "../components/ChangePasswordModal";

function Navbar() {
   const dispatch = useDispatch();
   const [viewProfile, setViewProfile] = useState(false);
   const [isCreateModalView, setIsCreateModalView] = useState(false);

   const profileRef = useRef();
   useHandleClickOutside(profileRef, () => setViewProfile(false));

   return (
      <section>
         <div className="container px-4 mx-auto">
            <nav className="flex justify-between items-center py-6">
               <Link className="text-3xl font-semibold leading-none" to="/">
                  <h1 className="text-3xl font-bold flex gap-2 items-center">
                     <span className="">
                        <MdOutlineDocumentScanner />
                     </span>
                     <span className="">Docomizer</span>
                  </h1>
               </Link>
               <div className="block">
                  <div ref={profileRef} className="relative">
                     <div
                        className="h-9 w-9"
                        onClick={() => setViewProfile(!viewProfile)}
                     >
                        <img
                           src={`https://api.dicebear.com/5.x/fun-emoji/svg`}
                           alt="pro"
                           className="w-full h-full object-contain"
                        />
                     </div>
                     {viewProfile && (
                        <div className="absolute w-[15rem] bg-gray-500 right-0 block  text-center py-3 rounded-md">
                           <p
                              className="text-gray-200 hover:text-white uppercase text-sm font-[600] tracking-wide cursor-pointer px-4 pb-2"
                              onClick={() => {
                                 dispatch(logoutUser());
                                 setViewProfile(false);
                              }}
                           >
                              Logout
                           </p>
                           <p
                              className="text-gray-200 hover:text-white uppercase text-sm font-[600] tracking-wide cursor-pointer pt-2 px-2 border-t"
                              onClick={() => setIsCreateModalView(true)}
                           >
                              Change Password
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            </nav>
         </div>
         {
            isCreateModalView &&
            <ChangePasswordModal setIsCreateModalView={setIsCreateModalView} />
         }
      </section>
   );
}

export default Navbar;
