import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Form from "../form/Form";
import CardList from "../card/CardList";
import { FetchMongoData } from "../../hooks/request";
import { useFilter } from "../../hooks/filter";

const SearchPage = () => {
  const { loading, error, request } = FetchMongoData();
  const [data, setData] = useState([]);

  const getMongoData = async () => {
    try {
      const data = await request("GET", "http://localhost:8080/cards");
      setData(data);
    } catch (error) {}
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
        />
        <CardList sortedItems={sortedItems} />
      </div>
    </div>
  );
};

export default SearchPage;
