import React, { useState, useEffect } from "react";
import JobItem from "./JobItem";
import JobItemAdmin from "./JobItemAdmin";
import { fetchPproducts } from "../Functions/fetchPproducts";

const JobListAdmin = ({ allJobs }) => {
  return (
    <div>
      {" "}
      {allJobs.length === 0 && <div>No jobs available at the moment</div>}
      {allJobs.length > 0 && (
        <div>
          {" "}
          <div className="flex flex-wrap gap-5 justify-center items-center">
            {" "}
            {allJobs.map((job) => (
              <JobItemAdmin key={job._id} job={job} />
            ))}{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListAdmin;
