import React from "react";

const JobDetail = ({ job }) => {
  const { title, description, location, salary, company } = job;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Location: {location}</p>
      <p>Salary: {salary}</p>
      <p>Company: {company}</p>
      <button className="bg-blue-500 rounded-lg p-3 textt-white">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetail;
