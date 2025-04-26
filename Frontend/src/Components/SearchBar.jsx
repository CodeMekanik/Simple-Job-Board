import React, { useEffect, useState } from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("searching for", search);
        }}
        className="flex mt-3 items-center justify-center gap-2 "
      >
        {" "}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg p-2 w-96"
        />
        <button
          type="submit"
          onClick={() => {}}
          className="block bg-gray-300 p-2 rounded-lg hover:bg-gray-200"
        >
          🔍
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
