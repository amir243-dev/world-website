import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ getClickedRegion }) => {
  const [iconArrow, setIconArrow] = useState(false);
  const [regions, setRegions] = useState([
    "Africa",
    "Americas",
    "Europe",
    "Oceania",
    "Polar",
    "Antarctic Ocean",
    "...",
  ]);

  const [pickedRegion, setPickedRegion] = useState("Filter By Region");

  return (
    <div
      onClick={() => {
        setIconArrow(!iconArrow);
      }}
      className="relative custom-text-color"
    >
      <div className="bg-elements shadow-sm py-3 px-5 flex items-center w-[200px] justify-between rounded-md">
        <p className="sm:text-sm text-[12px]">{pickedRegion}</p>
        <MdKeyboardArrowDown
          className={`transform ${
            iconArrow ? "rotate-0" : "rotate-180"
          } transition-transform duration-500 ease-in-out`}
        />
      </div>

      {/* ====================== */}

      {iconArrow && (
        <ul className="bg-elements shadow-sm sm:py-3 py-1.5 flex flex-col sm:gap-3 gap-1.5 text-[14px] font-light absolute top-13 bg-white sm:w-[200px] w-full rounded-md text-start">
          {regions.map((region) => {
            return (
              <li
                key={region}
                onClick={() => {
                  setPickedRegion(
                    region === "..." ? "Filter By Region" : region
                  );
                  getClickedRegion(region);
                }}
                className="cursor-pointer hover:bg-gray-300 w-full px-5 py-1.5"
              >
                {region}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
