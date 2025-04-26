import React from "react";
import { useParams } from "react-router";
import JobFormUpdate from "../Components/JobFormUpdate";

const JobUpdateForm = () => {
  const { id } = useParams();

  return (
    <div>
      <JobFormUpdate id={id} />
    </div>
  );
};

export default JobUpdateForm;
