import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { logoutUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useHandleClickOutside } from "../hooks";

function Navbar() {
   const dispatch = useDispatch();
   const [viewProfile, setViewProfile] = useState(false);

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
                        onClick={() => setViewProfile(true)}
                     >
                        <img
                           src={`https://api.dicebear.com/5.x/fun-emoji/svg`}
                           alt="pro"
                           className="w-full h-full object-contain"
                        />
                     </div>
                     {viewProfile && (
                        <div className="absolute w-[10rem] bg-gray-500 right-0 block  text-center py-3 rounded-lg">
                           <p
                              className="text-gray-200 uppercase text-sm font-[600] tracking-wide cursor-pointer"
                              onClick={() => {
                                 dispatch(logoutUser());
                                 setViewProfile(false);
                              }}
                           >
                              Logout
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            </nav>
         </div>
         
      </section>
   );
}

export default Navbar;
