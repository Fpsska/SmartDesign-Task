import React, { useMemo } from "react";
import Card from "./Card";
import "./card.scss";

const CardList = ({ sortedItems }) => {
  const list = useMemo(() => sortedItems.map((item) => {
    return <Card key={item.id} name={item.name} price={item.price} />;
  }), [sortedItems]);

  return <>{list}</>;
};

export default CardList;
