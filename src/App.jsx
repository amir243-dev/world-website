import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import countriesData from "./data.json";

function App() {
  // ======================DECLARE INITIALS===============
  const [allCountries] = useState(countriesData);

  // =============DECLARE LOADING=============
  const [isLoading, setIsLoading] = useState(true);

  // =======DECLARE FILTERED INITIALS==========
  const [filteredCountries, setFilteredCountries] = useState([]);

  // =====================FETCHING API OF ALL COUNTRIES=========================

  // useEffect(() => {
  //   const getData = async () => {
  //     const fetchData = await fetch("/src/data.json");
  //     const convertedData = await fetchData.json();

  //     console.log(convertedData);

  //     setAllCountries(convertedData);
  //   };

  //   getData();
  // }, []);

  // ================================FILTER BY SEARCH===========================

  const filterBySearch = (searched) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(searched);
    });

    setFilteredCountries(searchedCountry);
  };

  // ===========================FILTER BY REGION========================================

  const filterByRegion = (region) => {
    const selectedRegion = allCountries.filter((eCountry) => {
      return eCountry.region === region;
    });

    setFilteredCountries(selectedRegion);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theWorld={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                inputedCountry={filterBySearch}
                clickedRegion={filterByRegion}
              />
            }
          />

          <Route
            path="/details/:countryName"
            element={<CountryDetails totalCountry={allCountries} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
