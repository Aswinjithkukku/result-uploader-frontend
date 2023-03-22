import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { logoutUser } from "./redux/slices/userSlice";

const instance = axios.create({
   baseURL: `${process.env.REACT_APP_SERVER_URL}/api/`,
});

const AxiosInterceptor = ({ children }) => {
   console.log("interceptor");
   const dispatch = useDispatch();

   useEffect(() => {
      console.log("useEffect");

      const resInterceptor = (response) => {
         console.log("resInterceptor");
         return response;
      };

      const errInterceptor = (error) => {
         console.log("errInterceptor");
         if (error.response.status === 401) {
            dispatch(logoutUser());
            redirect("/login");
         }

         return Promise.reject();
      };

      const interceptor = instance.interceptors.response.use(
         resInterceptor,
         errInterceptor
      );

      return () => instance.interceptors.response.eject(interceptor);
   }, []);

   return children;
};

export default instance;
export { AxiosInterceptor };
