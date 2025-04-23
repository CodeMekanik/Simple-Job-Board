import React from "react";
import { useParams } from "react-router";

const JobUpdateForm = () => {
  const { id } = useParams();
  return <div>JobUpdateForm for {id}</div>;
};

export default JobUpdateForm;
