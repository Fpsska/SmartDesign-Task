import React, { useRef, useLayoutEffect } from "react";
import { useState } from "react";

import { useFilter } from "../../hooks/filter";

import Input from "../common/input/Input";
import CardList from "../card/CardList";
import Preloader from "../common/preloader/Preloader";
import FilterMenu from "../common/filtermenu/FilterMenu";


const SearchPage = ({ loading, error, data }) => {

  const [setManufacturer] = useState("");
  const [setBrand] = useState("");
  const [isTabletRes, setTabletResStatus] = useState(false);

  const [filtederData, setfiltederData] = useState(data);
  const [isFiltered, setFilteredStatus] = useState(false);

  const filterForm = useRef(null);

  const {
    enteredSearchValue,
    setEnteredSearchValue,
    sortedItems
  } = useFilter(data, "name");


  useLayoutEffect(() => {
    if (window.innerWidth <= 768) {
      setTabletResStatus(true);
    } else {
      setTabletResStatus(false);
    }
  }, []);

  const sortByManufacturer = (sortArg) => {
    if (sortArg === "nvidia" || sortArg === "amd") {
      let dataManufacturer = [...data].filter(item => item.manufacturer === sortArg);
      setfiltederData(dataManufacturer);
      setFilteredStatus(true);
    } else {
      setfiltederData(sortedItems);
    }
  }

  const sortByBrand = (sortArg) => {
    if (sortArg === "msi" || sortArg === "palit" || sortArg === "evga" || sortArg === "asus" || sortArg === "gigabyte" || sortArg === "asrock") {
      let dataBrand = [...data].filter(item => item.brand === sortArg);
      setfiltederData(dataBrand);
      setFilteredStatus(true);
    } else {
      setfiltederData(sortedItems);
    }
  }

  const resetFilters = (e) => {
    e.preventDefault();
    setFilteredStatus(false);
    filterForm.current.reset();
  }

  return (
    <div className="search">
      <div className="search__wrapper">
        <h1 className="title">SEARCH PAGE</h1>
        <form className="search__form" action="">
          <Input
            enteredSearchValue={enteredSearchValue}
            setEnteredSearchValue={setEnteredSearchValue}
            loading={loading}
          />
        </form>
        <div className="search__section">
          {
            loading ?
              <div className="page__preloader"><Preloader /></div> :
              error ? <h2 className="error">{`Error: ${error}`}</h2> :
                <div className="search__list">
                  <CardList data={isFiltered ? filtederData : sortedItems} />
                </div>
          }
          <div className={loading && !isTabletRes ? 'aside absolute' : 'aside'}>
            <form className="filter" onSubmit={resetFilters} ref={filterForm}>
              <FilterMenu
                loading={loading}
                setManufacturer={setManufacturer}
                setBrand={setBrand} sortByManufacturer={sortByManufacturer}
                sortByBrand={sortByBrand}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
