import React, { useState } from "react";
import { useNavigate } from "react-router";
import { deleteJob } from "../Functions/deleteJob";

const JobItemAdmin = ({ job }) => {
  const {
    _id,
    title,
    company,
    description,
    location,
    category,
    datePosted,
    salary,
  } = job;
  const [iDelete, setIDelete] = useState(false);
  const [iUpdate, setIUpdate] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/admin/${_id}`);
  };

  return (
    <div>
      <div className="text-black bg-white shadow-md rounded-lg p-4 mb-4 w-[300px] hover:bg-gray-50">
        <div
          onClick={() => {
            handleClick();
          }}
        >
          <div>
            <p className="text-gray-400 text-sm"> 🏪 {company}</p>
          </div>
          <h2 className="text-lg font-bold mt-3"> 👷‍♂️ {title}</h2>
          <div className="text-gray-600 text-sm mb-2 flex gap-5 mt-3">
            {" "}
            <p>📍 {location}</p> <p className="font-semibold"> {category}</p>{" "}
          </div>

          <div className="flex justify-between items-center mt-4">
            <p>posted at {datePosted.substring(0, 10)}</p>
            <p className="font-bold">${salary} </p>
          </div>
        </div>
        {!iDelete && !iUpdate && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => {
                setIDelete(true);
              }}
              className="text-white block bg-red-600 rounded-md p-2 font-bold hover:font-semibold hover:bg-red-400"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setIUpdate(true);
              }}
              className="text-white block bg-blue-800 rounded-md p-2 font-bold hover:font-semibold hover:bg-blue-600"
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

                  window.location.reload();
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

export default JobItemAdmin;
