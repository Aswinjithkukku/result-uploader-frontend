import axios from "../axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

function LoginPage() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         setIsLoading(true);
         const response = await axios.post("/login/", { username, password });
         dispatch(setUser(response?.data));
         navigate("/");
         setIsLoading(false);
      } catch (err) {
         setError(err?.response?.data[0]);
         setIsLoading(false);
      }
   };
   return (
      <section className="py-10 flex items-center justify-center h-screen">
         <div className="container px-4 mx-auto">
            <div className="flex max-w-md mx-auto flex-col text-center">
               <h1 className="text-3xl font-[900] text-gray-500">Docomizer</h1>
               <form onSubmit={handleSubmit}>
                  <div className="mt-12 mb-8 p-8 bg-white rounded shadow">
                     <span className="text-sm text-blueGray-400">Sign In</span>
                     <h4 className="mb-6 text-3xl">Login to account</h4>
                     <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                        <input
                           className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                           type="text"
                           placeholder="Enter Username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                        />
                        <svg
                           className="h-6 w-6 ml-4 my-auto text-blueGray-300"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                           ></path>
                        </svg>
                     </div>
                     <div className="flex mb-6 px-4 bg-blueGray-50 rounded">
                        <input
                           className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                           type="password"
                           placeholder="Enter your password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="ml-4">
                           <svg
                              className="h-6 w-6 my-auto text-blueGray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
                           </svg>
                        </button>
                     </div>
                     {error && (
                        <p className="text-[12px] text-red-500">{error}</p>
                     )}
                     <button
                        type="submit"
                        className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                     >
                        Sign In
                     </button>
                  </div>
               </form>
               <div>
                  <p className="text-xs text-blueGray-400 text-center">
                     <p className="underline hover:text-blueGray-500" >
                        Police privacy
                     </p>{" "}
                     and{" "}
                     <p className="underline hover:text-bluegray-500" >
                        Terms of Use
                     </p>
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default LoginPage;
