import React from "react";

export const SearchBar = ({ word, handleSearchChange, handleSearchClick }) => {
  return (
    <div class="input-area">
      <input placeholder="検索" value={word} onChange={handleSearchChange} />
      <button onClick={handleSearchClick}> 検索 </button>
    </div>
  );
};
