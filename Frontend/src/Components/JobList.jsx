import React, { useState, useEffect } from "react";
import JobItem from "./JobItem";

const JobList = () => {
  const [fetching, setFetching] = useState(true);
  const [allJobs, setAllJobs] = useState([]);
  const [errorFetching, setErrorFetching] = useState(false);
  const [errorGotten, setErrorGotten] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const skip = page > 1 ? (page - 1) * limit : 0;
    const fetchAllJobs = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/jobs?limit=${limit}&skip=${skip}`
        );
        const data = await response.json();
        setFetching(false);
        if (!response.ok) {
          setErrorFetching(true);
          setErrorGotten(data);
          throw new Error("Network response was not ok");
        }
        setAllJobs(data);
        setFetching(false);
      } catch (error) {}
    };
    fetchAllJobs();
  }, [page]);

  return (
    <div>
      {" "}
      {fetching && <div>Loading...</div>}
      {errorFetching && !fetching && <div>{errorGotten.message}</div>}
      {!fetching && allJobs.length === 0 && (
        <div>No jobs available at the moment</div>
      )}
      {!fetching && allJobs.length > 0 && (
        <div>
          {" "}
          <div className="flex flex-wrap gap-5 justify-center items-center">
            {" "}
            {allJobs.map((job) => (
              <JobItem key={job._id} job={job} />
            ))}{" "}
          </div>
          <div className="flex justify-center items-center mt-5 gap-2">
            {page > 1 && (
              <button
                onClick={() => {
                  setPage(page - 1);
                }}
                className="bg-gray-300  shadow-lg font-bold hover:bg-gray-200 rounded-md text-sm p-2"
              >
                Previous
              </button>
            )}

            {page < 3 && (
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className="bg-gray-300 shhadow-lg font-bold hover:bg-gray-200 rounded-md text-sm p-2"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
