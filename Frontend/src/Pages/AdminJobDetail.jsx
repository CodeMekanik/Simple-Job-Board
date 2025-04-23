import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSJob } from "../Functions/fetchSJob";
import AdminJDetail from "../Components/AdminJDetail";

const AdminJobDetail = () => {
  const { id } = useParams();
  const [errorFetching, setErrorFetching] = useState(false);
  const [errorGotten, setErrorGotten] = useState(false);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductdetail() {
      const { errorFetching, errorGotten, job, loading } = await fetchSJob(id);
      setErrorFetching(errorFetching);
      setErrorGotten(errorGotten);
      setJob(job);
      setLoading(loading);
    }
    fetchProductdetail();
  }, [id]);

  return (
    <div>
      {errorFetching && !loading && <div>{errorGotten.message}</div>}
      {!errorFetching && !loading && <AdminJDetail job={job} />}
    </div>
  );
};

export default AdminJobDetail;
