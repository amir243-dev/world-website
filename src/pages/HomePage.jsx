import React from "react";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import Countries from "../components/Countries";

const HomePage = ({ theWorld, inputedCountry, clickedRegion }) => {
  return (
    <div className="sm:px-20 px-4 pb-5">
      <div className="flex flex-col sm:flex-row gap-10 sm:items-center sm:justify-between sm:my-12.5 my-6">
        <SearchBar getInputedCountry={inputedCountry} />
        <Dropdown getClickedRegion={clickedRegion} />
      </div>

      <Countries getTheWorld={theWorld} />
    </div>
  );
};

export default HomePage;
