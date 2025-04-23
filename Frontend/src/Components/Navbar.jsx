import React from "react";
import { useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-2xl">
        <h1 className="text-2xl font-bold">JOB BOARD</h1>
        <div className="flex gap-4">
          <p
            onClick={() => navigate("/")}
            className="p-2 font-semibold hover:bg-gray-600 rounded-lg"
          >
            HOME
          </p>
          <p
            onClick={() => navigate("/admin")}
            className="p-2 font-semibold hover:bg-gray-600 rounded-lg"
          >
            ADMIN
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Navbar;
