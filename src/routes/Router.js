import { FacualityDashboard, HomePage, LoginPage } from "../pages";
import MainLayout from "./MainLayout";

const ThemeRoutes = [
   {
      path: "",
      element: <MainLayout />,
      children: [
         { path: "", element: <HomePage /> },
         { path: "/facuality-dashboard", element: <FacualityDashboard /> },
      ],
   },
   { path: "/login", element: <LoginPage /> },
];

export default ThemeRoutes;
