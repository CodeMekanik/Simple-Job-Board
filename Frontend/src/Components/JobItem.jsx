import React from "react";
import { useNavigate } from "react-router";

const JobItem = ({ job }) => {
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

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/jobs/${_id}`);
  };

  return (
    <div>
      <div
        className="text-black bg-white shadow-md rounded-lg p-4 mb-4 w-[300px] hover:bg-gray-50"
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

        <p>posted at {datePosted.substring(0, 10)}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="font-bold">${salary} </p>
          <button className="text-white block bg-blue-800 rounded-md p-2 font-bold hover:font-semibold hover:bg-blue-600">
            ✔ Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
