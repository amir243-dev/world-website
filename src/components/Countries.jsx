import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ getTheWorld }) => {
  return (
    <div className="sm:grid sm:grid-cols-4 flex flex-col gap-15 sm:items-start items-center">
      {getTheWorld.map((country) => {
        return (
          <Link
            to={`/details/ ${encodeURIComponent(country.name)}`}
            key={country.name}
            state={{ country }}
            className="bg-elements shadow-md text-start rounded-md sm:w-[275px]"
          >
            <img
              src={country.flags.png}
              alt=""
              className="rounded-t-md sm:w-[275px] sm:h-[183px]"
            />
            <div className="px-[25px] pt-[30px] pb-[40px] flex flex-col items-start gap-3.75 custom-text-color">
              <h3 className="font-semibold text-[18px]">{country.name}</h3>
              <div>
                <p className="text-[14px]">
                  Population: {country.population.toLocaleString()}
                </p>
                <p className="text-[14px]">Region: {country.region}</p>
                <p className="text-[14px]">Capital: {country.capital}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
