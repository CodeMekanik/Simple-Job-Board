import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import JobList from "../Components/JobList";
import Pagination from "../Components/Pagination";
import { fetchPproducts } from "../Functions/fetchPproducts";
import { getDocNum } from "../Functions/getDocNum";
import { createJob } from "../Functions/createJob";

const Hompage = () => {
  const [search, setSearch] = useState("");
  const [docNum, setDocNum] = useState(0);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [allJobs, setAllJobs] = useState([]);
  const [errorFetching, setErrorFetching] = useState(false);
  const [errorGotten, setErrorGotten] = useState(false);

  useEffect(() => {
    const createNewJob = async () => {
      jobs.forEach(async (job) => {
        try {
          await createJob(job);
        } catch (error) {
          console.log(error);
        }
      });
    };
    // createNewJob();
  }, []);

  useEffect(() => {
    async function fetchJobs() {
      const docNum = await getDocNum();
      const { fetchingJobs, allJob, errorFetch, errorGot } =
        await fetchPproducts(page);
      setDocNum(docNum);
      setFetching(fetchingJobs);
      setAllJobs(allJob);
      setErrorFetching(errorFetch);
      setErrorGotten(errorGot);
    }

    fetchJobs();
  }, [page]);

  return (
    <div>
      <p className="bg-gray-200 p-2 rounded-lg text-center text-lg font-bold mt-3">
        {docNum} numbers of {docNum > 1 ? "jobs" : "job"} found
      </p>
      {fetching && <p>Loading...</p>}
      {!fetching && errorFetching && (
        <div className="flex justify-center items-center mt-5">
          <p className="text-red-500 font-bold text-lg">{errorGotten}</p>
        </div>
      )}
      {!fetching && errorFetching && (
        <div className="flex justify-center items-center mt-5">
          <p className="text-red-500 font-bold text-lg">No jobs available</p>
        </div>
      )}
      {!fetching && !errorFetching && (
        <div>
          <JobList allJobs={allJobs} />
          <Pagination page={page} setPage={setPage} docNum={docNum} />
        </div>
      )}
    </div>
  );
};

export default Hompage;
