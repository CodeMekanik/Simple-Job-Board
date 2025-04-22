import React, { useState, useEffect } from "react";
import JobItem from "./JobItem";
import { fetchPproducts } from "../Functions/fetchPproducts";

const JobList = ({ allJobs }) => {
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
              <JobItem key={job._id} job={job} />
            ))}{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
