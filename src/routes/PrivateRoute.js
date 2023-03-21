import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
   const { isLoggedIn, isLoading } = useSelector((state) => state.users);
   if (isLoading) {
      return <div>Loading.....</div>;
   }
   if (!isLoggedIn) {
      return <Navigate replace to="/login" />;
   }

   return children;
}

export default PrivateRoute;
