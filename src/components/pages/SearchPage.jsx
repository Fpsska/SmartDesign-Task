import React, {useRef} from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FetchMongoData } from "../../hooks/request";
import { useFilter } from "../../hooks/filter";
import Input from "../common/input/Input";
import CardList from "../card/CardList";
import Preloader from "../common/preloader/Preloader";
import FilterMenu from "../common/filtermenu/FilterMenu";


const SearchPage = () => {
  const [manufacturer, setManufacturer] = useState("")
  const [brand, setBrand] = useState("")
  const { loading, error, request } = FetchMongoData();

  const [data, setData] = useState([]);
  const [filtederData, setfiltederData] = useState(data)
  const [isFiltered, setFilteredStatus] = useState(false)

  const filterForm = useRef(null)

  const getMongoData = async () => {
    try {
      const data = await request("GET", "https://backend-smart-design-task.herokuapp.com/cards");
      setData(data);
    } catch (error) { }
  };

  const { enteredSearchValue, setEnteredSearchValue, sortedItems } = useFilter(
    data, "name"
  );


  const sortByManufacturer = (sortArg) => {
    if (sortArg === "nvidia" || sortArg === "amd") {
      let dataManufacturer = [...data].filter(item => item.manufacturer === sortArg)
      setfiltederData(dataManufacturer)
      setFilteredStatus(true)
    } else {
      setfiltederData(sortedItems)
    }
  }

  const sortByBrand = (sortArg) => {
    if (sortArg === "msi" || sortArg === "palit" || sortArg === "evga" || sortArg === "asus" || sortArg === "gigabyte" || sortArg === "asrock") {
      let dataBrand = [...data].filter(item => item.brand === sortArg)
      setfiltederData(dataBrand)
      setFilteredStatus(true)
    } else {
      setfiltederData(sortedItems)
    }
  }

  const resetFilters = (e) => {
    e.preventDefault();
    setFilteredStatus(false)
    filterForm.current.reset();
  }

  useEffect(() => {
    getMongoData();
  }, []);


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
          <div className="search__list">
            {loading ?
              <Preloader />
              :
              error ? <h2 className="error">{`Error: ${error}`}</h2>
                :
                <CardList data={isFiltered ? filtederData : sortedItems} />
            }
          </div>
          <form className="filter" action="" onSubmit={resetFilters} ref={filterForm}>
            <FilterMenu loading={loading} setManufacturer={setManufacturer} setBrand={setBrand} sortByManufacturer={sortByManufacturer} sortByBrand={sortByBrand} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
