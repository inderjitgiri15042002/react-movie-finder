import React from "react";

const SearchBox = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter your Movie..."
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
