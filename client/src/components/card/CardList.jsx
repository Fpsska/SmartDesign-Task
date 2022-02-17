import React from "react";
import Card from "./Card";
import "./card.scss";

const CardList = ({ sortedItems }) => {
  const list = sortedItems.map((item) => {
    return <Card key={item.id} name={item.name} price={item.price} />;
  });

  return <div className="search__list">{list}</div>;
};

export default CardList;
