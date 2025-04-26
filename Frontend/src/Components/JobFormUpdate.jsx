import React, { useEffect, useState } from "react";
import { createJob } from "../Functions/createJob";
import { useNavigate } from "react-router";
import { fetchSJob } from "../Functions/fetchSJob";
import { updateJob } from "../Functions/updateJob";

const JobFormUpdate = ({ id }) => {
  const [jobTitle, setJobTitle] = useState("hello");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submitting state
  const [updated, setUpdated] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJob() {
      const { job } = await fetchSJob(id);
      setJobTitle(job.title);
      setCompanyName(job.company);
      setJobDescription(job.description);
      setLocation(job.location);
      setSalary(job.salary);
      setCategory(job.category);
    }
    fetchJob();
  }, [id]); // Add `id` as a dependency for the useEffect to refetch when `id` changes

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  const handleUpdateJob = async () => {
    console.log("Submitting form...");
    const jobData = {
      title: jobTitle,
      company: companyName,
      category,
      description: jobDescription,
      location,
      salary: Number(salary),
    };
    await updateJob(id, jobData);
  };

  const handleRedirect = () => {
    setUpdated(true);
    setTimeout(() => {
      setRedirecting(true);
    }, 1000);

    setTimeout(() => {
      navigate("/admin");
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // If already submitting, return early

    setIsSubmitting(true); // Set submitting to true to prevent multiple submissions

    await handleUpdateJob(); // Perform the update job
    handleRedirect(); // Redirect after job update
    setIsSubmitting(false); // Reset submitting state
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mt-3 max-w-[600px] flex-grow-1 min-w-[400px] shadow-lg p-4 rounded-lg">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Update Job
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => handleChange(e, setJobTitle)}
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
            onChange={(e) => handleChange(e, setLocation)}
            value={location}
            placeholder="Location"
            className="border rounded-lg p-2"
            required
          />
          <input
            onChange={(e) => handleChange(e, setSalary)}
            value={salary}
            type="number"
            placeholder="Salary"
            className="border rounded-lg p-2"
            required
          />
          <input
            onChange={(e) => handleChange(e, setCategory)}
            value={category}
            type="text"
            placeholder="Category"
            className="border rounded-lg p-2"
            required
          />

          <button
            type="submit"
            className={`${
              isSubmitting
                ? "bg-gray-300 cursor-wait text-gray-500"
                : "bg-blue-500 hover:bg-blue-400 text-white"
            } font-bold rounded-lg p-2`}
            disabled={isSubmitting} // Disable the button if submitting
          >
            {isSubmitting ? "Updating..." : "Update Job"}
          </button>
        </form>

        <div className="text-green-500 font-bold text-lg mt-5 text-right">
          {updated && <p>Job Updated Successfully ✔</p>}
          {redirecting && <p>Redirecting to Admin page...</p>}
        </div>
      </div>
    </div>
  );
};

export default JobFormUpdate;
