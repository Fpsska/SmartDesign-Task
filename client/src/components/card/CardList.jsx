import React, { useMemo } from "react";
import Card from "./Card";
import "./card.scss";

const CardList = ({ sortedItems }) => {
  const list = useMemo(() => sortedItems.map((item) => {
    return <Card key={item._id} name={item.name} price={item.price} preview={item.preview} />;
  }), [sortedItems]);

  return <>{list}</>;
};

export default CardList;
