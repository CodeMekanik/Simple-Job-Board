import React from "react";

const JobDetail = ({ job }) => {
  const { title, description, location, category, salary, company } = job;
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
        <button className="bg-blue-500 mt-5 block m-auto text-3xl rounded-lg p-3 font-bold hover:bg-blue-400 textt-white">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
