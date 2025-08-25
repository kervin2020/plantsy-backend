import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        id="search"
        placeholder="Type a name to search..."
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;