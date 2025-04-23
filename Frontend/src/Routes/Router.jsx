import React, { Children } from "react";
import { createBrowserRouter } from "react-router";
import AppLayout from "./AppLayout";
import Hompage from "../Pages/Hompage";
import AdminDashboard from "../Pages/AdminDashboard";
import JobFormPage from "../Pages/JobFormPage";
import JobDetailPage from "../Pages/JobDetailPage";
import JobUpdateForm from "../Pages/JobUpdateForm";
import AdminLayout from "./AdminLayout";
import AdminJobDetail from "../Pages/AdminJobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Hompage /> },
      { path: "jobs/:id", element: <JobDetailPage /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "new", element: <JobFormPage /> },
          { path: ":id", element: <AdminJobDetail /> },
          { path: "edit/:id", element: <JobUpdateForm /> },
        ],
      },
    ],
  },
]);
export default router;
