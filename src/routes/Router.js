import {
   FacualityDashboard,
   HomePage,
   LoginPage,
   MarkSheetUpload,
   ResultPage,
} from "../pages";
import MainLayout from "./MainLayout";
import PrivateRoute from "./PrivateRoute";

const ThemeRoutes = [
   {
      path: "",
      element: (
         <PrivateRoute>
            <MainLayout />
         </PrivateRoute>
      ),
      children: [
         { path: "", element: <HomePage /> },
         { path: "/facuality-dashboard", element: <FacualityDashboard /> },
         { path: "/result", element: <ResultPage /> },
         { path: "/marksheet-upload", element: <MarkSheetUpload /> },
      ],
   },
   { path: "/login", element: <LoginPage /> },
];

export default ThemeRoutes;
