import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";

import { useFilter } from "../../hooks/filter";

import { filterByManufacturer } from "../../helpers/filterByManufacturer";
import { filterByBrand } from "../../helpers/filterByBrand";

import Input from "../common/input/Input";
import CardList from "../card/CardList";
import Preloader from "../common/preloader/Preloader";
import FilterMenu from "../common/filtermenu/FilterMenu";


const SearchPage = ({ loading, error, data }) => {

  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const [isTabletRes, setTabletResStatus] = useState(false);

  const { enteredSearchValue, setEnteredSearchValue, sortedItems } = useFilter(data, "name");

  const [filteredData, setFilteredData] = useState(sortedItems);


  useEffect(() => {
    setFilteredData(filterByManufacturer(sortedItems, manufacturer));
  }, [sortedItems, manufacturer]);

  useEffect(() => {
    setFilteredData(filterByBrand(sortedItems, brand));
  }, [sortedItems, brand]);



  useLayoutEffect(() => {
    if (window.innerWidth <= 768) {
      setTabletResStatus(true);
    } else {
      setTabletResStatus(false);
    }
  }, []);

  return (
    <div className="search">
      <div className="search__wrapper">
        <h1 className="title">SEARCH PAGE</h1>
        <form className="search__form">
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
              error ?
                <h2 className="error">{`Error: ${error}`}</h2> :
                <div className="search__list">
                  <CardList filteredData={filteredData} />
                </div>
          }
          <div className={loading && !isTabletRes ? 'aside absolute' : 'aside'}>
            <FilterMenu
              loading={loading}
              sortedItems={sortedItems}

              setManufacturer={setManufacturer}
              setBrand={setBrand}
              setFilteredData={setFilteredData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
