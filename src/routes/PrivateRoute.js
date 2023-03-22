import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
   const { isLoggedIn } = useSelector((state) => state.users);

   if (!isLoggedIn) {
      return <Navigate replace to="/login" />;
   }

   return children;
}

export default PrivateRoute;
