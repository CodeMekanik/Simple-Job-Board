import React, { useEffect, useState } from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
      <div className="flex mt-3 items-center justify-center gap-2 border-2 border-gray-300 border-solid">
        {" "}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p onClick={() => {}}>🔍</p>
      </div>
    </div>
  );
};

export default SearchBar;
