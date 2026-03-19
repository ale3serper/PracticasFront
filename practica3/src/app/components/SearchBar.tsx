"use client";

import "./SearchBar.css"

interface Props {
  setSearchQuery: (value: string) => void;
}

const SearchBar=({ setSearchQuery }: Props) =>{
  return (
    <input
      className="serachBar"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;