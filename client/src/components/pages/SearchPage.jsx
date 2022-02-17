import React from "react";
import Form from "../form/Form";
import CardList from "../card/CardList";

const SearchPage = () => {
  return (
    <div className="search">
      <div className="search__wrapper">
        <h1 className="title">SEARCH PAGE</h1>
        <Form />
        <CardList/>
      </div>
    </div>
  );
};

export default SearchPage;
