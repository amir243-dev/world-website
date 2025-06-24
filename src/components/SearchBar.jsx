import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ getInputedCountry }) => {
  return (
    <div className="relative custom-text-colo">
      <input
        onChange={(event) => {
          getInputedCountry(event.target.value.toLowerCase());
        }}
        type="text"
        placeholder="Search for a country..."
        className="bg-elements shadow-sm py-3 ps-16 pe-3 sm:w-[450px] w-full rounded-md sm:placeholder:text-[14px] placeholder:text-[10px]"
      />
      <IoMdSearch className="absolute top-3 text-2xl left-5 custom-text-color" />
    </div>
  );
};

export default SearchBar;
