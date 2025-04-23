import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const AppLayout = () => {
  return (
    <div className="p-3 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
