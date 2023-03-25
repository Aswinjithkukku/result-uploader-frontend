import {
   ExamsListPage,
   FacualityDashboard,
   HomePage,
   LoginPage,
   MarkSheetUpload,
   ResultPage,
   ResultPageStudent,
   StudentDashboard,
   StudentListPage,
   SubjectListPage,
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
         { path: "/student-dashboard", element: <StudentDashboard /> },
         {
            path: "/facuality-dashboard/studentlist",
            element: <StudentListPage />,
         },
         {
            path: "/facuality-dashboard/subjectlist",
            element: <SubjectListPage />,
         },
         { path: "/:id/semester/:semid", element: <ResultPage /> },
         { path: "/:id/semester/student/:semid", element: <ResultPageStudent /> },
         { path: "/marksheet-upload", element: <MarkSheetUpload /> },
         { path: "/:id/examlist", element: <ExamsListPage /> },
      ],
   },
   { path: "/login", element: <LoginPage /> },
];

export default ThemeRoutes;
