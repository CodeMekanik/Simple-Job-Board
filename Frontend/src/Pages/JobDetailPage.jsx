import React, { useEffect, useState } from "react";
import JobDetail from "../Components/JobDetail";
import { useParams } from "react-router";

const JobDetailPage = () => {
  const { id } = useParams();
  const [errorFetching, setErrorFetching] = useState(false);
  const [errorGotten, setErrorGotten] = useState(false);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductdetail() {
      try {
        const response = await fetch(`http://localhost:5000/api/jobs/${id}`);

        if (!response.ok) {
          setErrorFetching(true);
          const data = await response.json();
          setErrorGotten(data);
          setLoading(false);
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setJob(data);
        console.log("✅✅  Job recieved succcssfully");
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProductdetail();
  }, [id]);

  return (
    <div>
      {errorFetching && !loading && <div>{errorGotten.message}</div>}
      {!errorFetching && !loading && <JobDetail job={job} />}
    </div>
  );
};

export default JobDetailPage;
