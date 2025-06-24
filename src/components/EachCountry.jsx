import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const EachCountry = ({ perCountry }) => {
  const navigate = useNavigate();

  const borders = perCountry.borders
    ? perCountry.borders.map((border) => {
        return <p className="bg-elements px-6 py-2 shadow-md">{border}</p>;
      })
    : "No Borders for this Country";

  const currencies = perCountry?.currencies
    ? Object.values(perCountry.currencies)[0].name
    : "No Currency";

  return (
    <div className=" sm:px-20 px-4 pb-20">
      <div
        onClick={() => {
          navigate("/", { replace: true });
          window.location.reload();
        }}
        className="bg-elements sm:my-[50px] mb-8 shadow sm:w-30 w-20 flex items-center justify-between sm:px-6 px-3 sm:py-2 py- rounded-md mt-2.5"
      >
        <BsArrowLeft />
        <p className="text-[13px] sm:text-[16px]">Back</p>
      </div>

      {/* ================== */}

      <div className="custom-text-color flex w-full sm:gap-[150px] gap-10 sm:items-center flex-col sm:flex-row mt-15 sm:mt-0">
        <img
          src={perCountry.flags.png}
          alt=""
          className="sm:w-[550px] sm:h-[366px]"
        />

        <div className="flex flex-col items-start text-start sm:gap-10 gap-5 w-full">
          <h2 className="sm:text-[24px] text-[20px] font-extrabold">
            {perCountry.name}
          </h2>
          <div className="flex items-start w-full sm:justify-between sm:flex-row flex-col gap-10">
            <div className="flex flex-col items-start gap-2.5 sm:text-[16px] text-[12px]">
              <p>
                <b>Native Name: </b>
                {perCountry.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {perCountry.population.toLocaleString()}
              </p>
              <p>
                <b>Region: </b>
                {perCountry.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {perCountry.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {perCountry.capital}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <p>
                <b>Top Level Domain: </b>
                {perCountry.topLevelDomain}
              </p>
              <p>
                <b>Currencies: </b>
                {currencies}
              </p>
              <p>
                <b>Languages: </b>
                {perCountry.languages[0].name}
              </p>
            </div>
          </div>

          <div className="mt-5 flex sm:flex-row flex-col sm:items-center sm:gap-2">
            <p>
              <b>Borders: </b>
            </p>
            <div className="grid sm:grid-cols-4 grid-cols-3 gap-1 items-center">
              {borders}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCountry;
