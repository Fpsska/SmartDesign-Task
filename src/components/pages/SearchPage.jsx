import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";

import { useFilter } from "../../hooks/useFilter";

import { filterByManufacturer } from "../../helpers/filterByManufacturer";
import { filterByBrand } from "../../helpers/filterByBrand";

import Input from "../input/Input";
import CardList from "../card/CardList";
import Preloader from "../common/preloader/Preloader";
import FilterMenu from "../filtermenu/FilterMenu";


const SearchPage = ({ loading, error, data }) => {

  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const [isTabletRes, setTabletResStatus] = useState(false);

  const { enteredSearchValue, setEnteredSearchValue, sortedItems } = useFilter(data, "name");

  const [filteredData, setFilteredData] = useState(sortedItems);

  const formRef = useRef(!null);


  const resetFilters = (e) => {
    e.preventDefault();

    setFilteredData(sortedItems);

    // clear form
    formRef.current.reset();
  }

  useEffect(() => {
    setFilteredData(sortedItems);
  }, [sortedItems]);

  // useEffect(() => {
  //   setFilteredData(filterByManufacturer(sortedItems, manufacturer));
  // }, [manufacturer]);

  // useEffect(() => {
  //   setFilteredData(filterByBrand(sortedItems, brand));
  // }, [brand]);

  useLayoutEffect(() => {
    window.innerWidth <= 768 ? setTabletResStatus(true) : setTabletResStatus(false)
  }, []);

  return (
    <div className="search">
      <div className="search__wrapper">
        <h1 className="title">SEARCH PAGE</h1>
        <form className="search__form" onSubmit={e => e.preventDefault()}>
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
          <aside className={loading && !isTabletRes ? 'aside absolute' : 'aside'}>
            <form className="filter" onSubmit={e => resetFilters(e)} ref={formRef}>
              <FilterMenu
                loading={loading}
                setManufacturer={setManufacturer}
                setBrand={setBrand}
              />
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
