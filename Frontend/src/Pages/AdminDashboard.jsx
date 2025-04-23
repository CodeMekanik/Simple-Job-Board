import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import JobListAdmin from "../Components/JobListAdmin";
import { useNavigate } from "react-router";
import Pagination from "../Components/Pagination";
import { fetchPproducts } from "../Functions/fetchPproducts";
import { getDocNum } from "../Functions/getDocNum";

const AdminDashboard = () => {
  const [search, setSearch] = useState("");
  const [docNum, setDocNum] = useState(0);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [allJobs, setAllJobs] = useState([]);
  const [errorFetching, setErrorFetching] = useState(false);
  const [errorGotten, setErrorGotten] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJobs() {
      const docNum = await getDocNum();
      setDocNum(docNum);
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

      <div
        onClick={() => {
          navigate("/admin/new");
        }}
        className="flex justify-center items-center "
      >
        <p className="font-extrabold my-5  bg-yellow-300 hover:bg-yellow-400 text-2xl p-5 rounded-2xl w-">
          Create New Job
        </p>
      </div>
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
          <Pagination page={page} setPage={setPage} docNum={docNum} />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
