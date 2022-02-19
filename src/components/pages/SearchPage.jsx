import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Form from "../form/Form";
import CardList from "../card/CardList";
import Preloader from "../common/preloader/Preloader";
import { FetchMongoData } from "../../hooks/request";
import { useFilter } from "../../hooks/filter";

const SearchPage = () => {
  const { loading, error, request } = FetchMongoData();
  const [data, setData] = useState([]);

  const getMongoData = async () => {
    try {
      // http://localhost:8080/cards
      const data = await request("GET", "https://backend-smart-design-task.herokuapp.com/cards");
      setData(data);
    } catch (error) { }
  };

  const { enteredSearchValue, setEnteredSearchValue, sortedItems } = useFilter(
    data,
    "name"
  );

  useEffect(() => {
    getMongoData();
  }, []);

  return (
    <div className="search">
      <div className="search__wrapper">
        <h1 className="title">SEARCH PAGE</h1>
        <Form
          enteredSearchValue={enteredSearchValue}
          setEnteredSearchValue={setEnteredSearchValue}
          loading={loading}
        />
        <div className="search__list">
          {loading ?
            <Preloader />
            :
            error ? <h2 className="error">{`Error: ${error}`}</h2>
              :
              <CardList sortedItems={sortedItems} />
          }
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
