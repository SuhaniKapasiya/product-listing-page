import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full  p-2 border rounded mt-10 "
    />
  );
}; 

export default Search;
