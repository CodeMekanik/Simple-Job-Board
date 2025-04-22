import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import JobListAdmin from "../Components/JobListAdmin";

import Pagination from "../Components/Pagination";
import { fetchPproducts } from "../Functions/fetchPproducts";

const AdminDashboard = () => {
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [allJobs, setAllJobs] = useState([]);
  const [errorFetching, setErrorFetching] = useState(false);
  const [errorGotten, setErrorGotten] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      const { fetchingJobs, allJob, errorFetch, errorGot } =
        await fetchPproducts(page);

      setFetching(fetchingJobs);
      setAllJobs(allJob);
      setErrorFetching(errorFetch);
      setErrorGotten(errorGot);
    }

    fetchJobs();
  }, [page]);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />

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
          <JobListAdmin allJobs={allJobs} />
          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
