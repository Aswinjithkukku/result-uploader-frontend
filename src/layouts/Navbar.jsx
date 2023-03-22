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
               <div className="lg:hidden">
                  <button className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                     <svg
                        className="fill-current h-4 w-4"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                     </svg>
                  </button>
               </div>
               <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                  <li>
                     <p className="text-sm text-blueGray-400 hover:text-blueGray-500">
                        Product
                     </p>
                  </li>
                  <li>
                     <p className="text-sm text-blueGray-400 hover:text-blueGray-500">
                        Company
                     </p>
                  </li>
                  <li>
                     <p className="text-sm text-blueGray-400 hover:text-blueGray-500">
                        About Us
                     </p>
                  </li>
                  <li>
                     <p className="text-sm text-blueGray-400 hover:text-blueGray-500">
                        Features
                     </p>
                  </li>
               </ul>
               <div className="hidden lg:block">
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
         <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
            <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
               <div className="flex items-center mb-8">
                  <p className="mr-auto text-3xl font-semibold leading-none">
                     <img
                        className="h-10"
                        src="metis-assets/logos/metis/metis.svg"
                        alt=""
                        width="auto"
                     />
                  </p>
                  <button className="navbar-close">
                     <svg
                        className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M6 18L18 6M6 6l12 12"
                        ></path>
                     </svg>
                  </button>
               </div>
               <div>
                  <ul>
                     <li className="mb-1">
                        <p className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600">
                           Product
                        </p>
                     </li>
                     <li className="mb-1">
                        <p className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600">
                           Company
                        </p>
                     </li>
                     <li className="mb-1">
                        <p className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600">
                           About Us
                        </p>
                     </li>
                     <li className="mb-1">
                        <p className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600">
                           Features
                        </p>
                     </li>
                  </ul>
                  <div className="mt-4 pt-6 border-t border-blueGray-100">
                     <p className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded">
                        Sign Up
                     </p>
                     <p className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded">
                        Log In
                     </p>
                  </div>
               </div>
               <div className="mt-auto">
                  <div className="my-4 text-xs text-blueGray-400">
                     <span>Get in Touch</span>
                     <p className="text-blue-600 hover:text-blue-600 underline">
                        info@example.com
                     </p>
                  </div>
                  <p className="inline-block px-1">
                     <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                  </p>
                  <p className="inline-block px-1">
                     <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                  </p>
                  <p className="inline-block px-1">
                     <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                  </p>
               </div>
            </nav>
         </div>
      </section>
   );
}

export default Navbar;
