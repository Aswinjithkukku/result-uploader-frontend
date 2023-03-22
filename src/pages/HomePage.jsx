import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePage() {
   const navigate = useNavigate();
   const { user } = useSelector((state) => state.users);
   return (
      <div>
         <section className="py-20">
            <div className="container px-4 mx-auto">
               <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 order-1 md:order-0">
                     <div className="max-w-md">
                        <h2 className="mb-4 text-3xl md:text-4xl font-bold font-heading">
                           The Perfect Classmate Partner
                        </h2>
                        <p className="mb-6 leading-loose text-blueGray-400">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Sed luctus eget justo et iaculis.
                        </p>
                        <ul>
                           <li className="py-4">
                              <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">
                                 1
                              </span>
                              <span>Proin volutpat ex eu</span>
                           </li>
                           <li className="py-4">
                              <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">
                                 2
                              </span>
                              <span>Fusce posuere nibh in cursus</span>
                           </li>
                           <li className="py-4">
                              <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">
                                 3
                              </span>
                              <span>Maecenas sit amet vehicula</span>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0">
                     <img
                        className="sm:max-w-sm lg:max-w-full mx-auto"
                        src="https://shuffle.dev/metis-assets/illustrations/work-tv.png"
                        alt=""
                     />
                  </div>
               </div>
               <div className="flex justify-center items-center">
                  <button
                     className="uppercase text-gray-400 border  font-[700] py-3 px-6 rounded"
                     onClick={() => {
                        user?.user_role === 2
                           && navigate("/facuality-dashboard")
                        user?.user_role === 3
                           && navigate("/student-dashboard")
                     }}
                  >
                     View Dashboard
                  </button>
               </div>
            </div>
         </section>
      </div>
   );
}

export default HomePage;
