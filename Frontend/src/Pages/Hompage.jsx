import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import JobList from "../Components/JobList";

const Hompage = () => {
  return (
    <div>
      <SearchBar />
      <JobList />
    </div>
  );
};

export default Hompage;
