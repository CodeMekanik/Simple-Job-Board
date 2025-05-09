import React, { useState } from "react";
import { createJob } from "../Functions/createJob";
import { useNavigate } from "react-router";

const NewJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [created, setCreated] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  const handleRedirect = () => {
    setCreated(true);
    setTimeout(() => {
      setRedirecting(true);
    }, 1000);

    setTimeout(() => {
      navigate("/admin");
    }, 2000);
  };
  const handleCreateJob = async () => {
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
    handleRedirect();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleCreateJob();
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mt-3 max-w-[600px] flex-grow-1 min-w-[400px] shadow-lg p-4 rounded-lg">
        <div>
          {" "}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Create a New Job
          </h1>
        </div>

        <form
          onSubmit={async (e) => {
            setSubmitted(true);
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
            className="border rounded-lg p-2"
            required
          />
          <input
            onChange={(e) => handleChange(e, setCompanyName)}
            value={companyName}
            type="text"
            placeholder="Company Name"
            className="border rounded-lg p-2"
            required
          />
          <textarea
            onChange={(e) => handleChange(e, setJobDescription)}
            value={jobDescription}
            placeholder="Job Description"
            className="border rounded-2xl p-2"
            required
          ></textarea>
          <input
            type="text"
            onChange={(e) => {
              handleChange(e, setLocation);
            }}
            value={location}
            placeholder="Location"
            className="border rounded-lg p-2"
            required
          />
          <input
            onChange={(e) => {
              handleChange(e, setSalary);
            }}
            value={salary}
            type="number"
            placeholder="Salary"
            className="border rounded-lg p-2"
            required
          />
          <input
            onChange={(e) => {
              handleChange(e, setCategory);
            }}
            value={category}
            type="text"
            placeholder="category"
            className="border rounded-lg p-2"
            required
          />

          <button
            type="submit"
            className={`${
              !submitted
                ? "bg-blue-500 hover:bg-blue-400 text-white"
                : "bg-gray-300 cursor-wait text-gray-500"
            }  font-bold rounded-lg p-2`}
          >
            Create Job
          </button>
        </form>
        <div className="text-green-500 font-bold text-lg mt-5 text-right">
          {created && <p> New Job Created Successfully ✔</p>}
          {redirecting && <p>Redirecting to Admin page</p>}
        </div>
      </div>
    </div>
  );
};

export default NewJobForm;
