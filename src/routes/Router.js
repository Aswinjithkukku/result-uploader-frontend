import {
   ExamsListPage,
   FacualityDashboard,
   HomePage,
   LoginPage,
   MarkSheetUpload,
   ResultPage,
   StudentListPage,
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
         {
            path: "/facuality-dashboard/studentlist",
            element: <StudentListPage />,
         },
         { path: "/:id/semester/:semid", element: <ResultPage /> },
         { path: "/marksheet-upload", element: <MarkSheetUpload /> },
         { path: "/:id/examlist", element: <ExamsListPage /> },
      ],
   },
   { path: "/login", element: <LoginPage /> },
];

export default ThemeRoutes;
