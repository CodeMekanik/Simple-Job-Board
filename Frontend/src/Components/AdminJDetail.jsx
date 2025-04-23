import React, { useState } from "react";
import { useNavigate } from "react-router";
import { deleteJob } from "../Functions/deleteJob";

const AdminJobDetail = ({ job }) => {
  const [iDelete, setIDelete] = useState(false);
  const [iUpdate, setIUpdate] = useState(false);
  const { _id, title, description, location, category, salary, company } = job;
  const navigate = useNavigate();
  return (
    <div className=" md:flex gap-6 justify-between items-center ">
      <div className="mt-3.5">
        {" "}
        <p className="text-gray-600 text-right">
          🏪🏪 Company : <span className="font-bold text-lg"> {company}</span>
        </p>
        <h1 className=" text-2xl mt-3 font-extrabold">
          👷‍♂️ {title}{" "}
          <span className="font-bold text-sm text-gray-600">Needed</span>
        </h1>
        <div className="mt-3 p-5 shadow-lg rounded-3xl">
          {" "}
          <p className="text-2xl font-bold"> Job Description:</p>
          <p className="text-gray-800 font-semibold mt-3 ">{description}</p>
        </div>
      </div>
      <div className="mt-3 bg-gray-800 flex-shrink-0 w-[28rem] m-auto text-white p-5 shadow-lg rounded-3xl">
        {" "}
        <div className="flex justify-between gap-7 items-center ">
          <div className="text-lg ">
            <p className="font-semibold"> Location:</p>
            📍 <span className="font-bold">{location}</span>{" "}
          </div>
          <div>
            <p className="font-semibold text-lg">Salary:</p>{" "}
            <p className="font-extrabold text-4xl"> ${salary}</p>
          </div>
        </div>
        <p className="font-semibold text-center mt-5 text-lg">
          Work Category :
        </p>
        <p className="font-bold text-center text-3xl">{category}</p>
        {!iDelete && !iUpdate && (
          <div className="flex justify-between gap-7 items-center ">
            <button
              onClick={() => {
                setIDelete(true);
              }}
              className="bg-red-500 mt-5 block m-auto text-2xl rounded-lg p-3 font-bold hover:bg-red-400 textt-white"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setIUpdate(true);
              }}
              className="bg-blue-500 mt-5 block m-auto text-2xl rounded-lg p-3 font-bold hover:bg-blue-400 textt-white"
            >
              Update
            </button>
          </div>
        )}
        {iDelete && !iUpdate && (
          <div>
            <p className="text-center text-red-600 mt-2">
              {" "}
              Are you sure you want to <span className="font-bold">
                delete
              </span>{" "}
              this job?
            </p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => {
                  deleteJob(_id);

                  navigate("/admin");
                }}
                className="text-white block bg-red-600 rounded-md p-2 font-bold hover:font-semibold hover:bg-red-400"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setIDelete(false);
                }}
                className="text-white block bg-blue-800 rounded-md p-2 font-bold hover:font-semibold hover:bg-blue-600"
              >
                No
              </button>
            </div>
          </div>
        )}
        {!iDelete && iUpdate && (
          <div>
            <p className="text-center text-red-600 mt-2">
              {" "}
              Are you sure you want to <span className="font-bold">
                update
              </span>{" "}
              this job?
            </p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => {
                  navigate(`/admin/edit/${_id}`);
                }}
                className="text-white block bg-red-600 rounded-md p-2 font-bold hover:font-semibold hover:bg-red-400"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setIUpdate(false);
                }}
                className="text-white block bg-blue-800 rounded-md p-2 font-bold hover:font-semibold hover:bg-blue-600"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminJobDetail;
