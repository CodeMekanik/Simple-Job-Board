import React, { useState } from "react";
import { createJob } from "../Functions/createJob";

const NewJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e, set) => {
    set(e.target.value);
  };
  const handleSubmit = async (e) => {
    console.log("submiting form");
    const jobData = {
      title: jobTitle,
      company: companyName,
      category,
      description: jobDescription,
      location,
      salary: Number(salary),
    };
    await createJob(jobData);
  };
  return (
    <div>
      <div className="mt-3 shadow-lg p-4 rounded-lg">
        <div>
          {" "}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Create a New Job
          </h1>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="flex flex-col gap-4 mt-4"
        >
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => {
              handleChange(e, setJobTitle);
            }}
            placeholder="Job Title"
            className="border p-2"
            required
          />
          <input
            onChange={(e) => handleChange(e, setCompanyName)}
            value={companyName}
            type="text"
            placeholder="Company Name"
            className="border p-2"
            required
          />
          <textarea
            onChange={(e) => handleChange(e, setJobDescription)}
            value={jobDescription}
            placeholder="Job Description"
            className="border p-2"
            required
          ></textarea>
          <input
            type="text"
            onChange={(e) => {
              handleChange(e, setLocation);
            }}
            value={location}
            placeholder="Location"
            className="border p-2"
            required
          />
          <input
            onChange={(e) => {
              handleChange(e, setSalary);
            }}
            value={salary}
            type="text"
            placeholder="Salary"
            className="border p-2"
            required
          />
          <input
            onChange={(e) => {
              handleChange(e, setCategory);
            }}
            value={category}
            type="text"
            placeholder="category"
            className="border p-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2">
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewJobForm;
