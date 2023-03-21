import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <section>
         <div className="container px-4 mx-auto">
            <nav className="flex justify-between items-center py-6">
               <Link className="text-3xl font-semibold leading-none" to="/">
                  <h1 className="text-4xl font-bold">Result Manager</h1>
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
                     <a
                        className="text-sm text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                     >
                        Product
                     </a>
                  </li>
                  <li>
                     <a
                        className="text-sm text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                     >
                        Company
                     </a>
                  </li>
                  <li>
                     <a
                        className="text-sm text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                     >
                        About Us
                     </a>
                  </li>
                  <li>
                     <a
                        className="text-sm text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                     >
                        Features
                     </a>
                  </li>
               </ul>
               <div className="hidden lg:block">
                  <a
                     className="mr-2 inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                     href="#"
                  >
                     Log In
                  </a>
                  <a
                     className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                     href="#"
                  >
                     Sign Up
                  </a>
               </div>
            </nav>
         </div>
         <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
            <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
               <div className="flex items-center mb-8">
                  <a
                     className="mr-auto text-3xl font-semibold leading-none"
                     href="#"
                  >
                     <img
                        className="h-10"
                        src="metis-assets/logos/metis/metis.svg"
                        alt=""
                        width="auto"
                     />
                  </a>
                  <button className="navbar-close">
                     <svg
                        className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M6 18L18 6M6 6l12 12"
                        ></path>
                     </svg>
                  </button>
               </div>
               <div>
                  <ul>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                           href="#"
                        >
                           Product
                        </a>
                     </li>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                           href="#"
                        >
                           Company
                        </a>
                     </li>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                           href="#"
                        >
                           About Us
                        </a>
                     </li>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                           href="#"
                        >
                           Features
                        </a>
                     </li>
                  </ul>
                  <div className="mt-4 pt-6 border-t border-blueGray-100">
                     <a
                        className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                        href="#"
                     >
                        Sign Up
                     </a>
                     <a
                        className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                        href="#"
                     >
                        Log In
                     </a>
                  </div>
               </div>
               <div className="mt-auto">
                  <p className="my-4 text-xs text-blueGray-400">
                     <span>Get in Touch</span>
                     <a
                        className="text-blue-600 hover:text-blue-600 underline"
                        href="#"
                     >
                        info@example.com
                     </a>
                  </p>
                  <a className="inline-block px-1" href="#">
                     <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-1" href="#">
                     <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                  </a>
                  <a className="inline-block px-1" href="#">
                     <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                  </a>
               </div>
            </nav>
         </div>
      </section>
   );
}

export default Navbar;
