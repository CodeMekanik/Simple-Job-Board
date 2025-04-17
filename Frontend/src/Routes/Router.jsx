import React, { Children } from "react";
import { createBrowserRouter } from "react-router";
import AppLayout from "./AppLayout";
import Hompage from "../Pages/Hompage";
import AdminDashboard from "../Pages/AdminDashboard";
import JobFormPage from "../Pages/JobFormPage";
import JobDetailPage from "../Pages/JobDetailPage";
import JobUpdateForm from "../Pages/JobUpdateForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Hompage /> },
      { path: "/jobs/:id", element: <JobDetailPage /> },
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/admin/new", element: <JobFormPage /> },
      { path: "/admin/edit/:id", element: <JobUpdateForm /> },
    ],
  },
]);
export default router;
