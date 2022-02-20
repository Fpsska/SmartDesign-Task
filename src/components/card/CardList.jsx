import React, { useMemo } from "react";
import Card from "./Card";
import "./card.scss";

const CardList = ({ data }) => {
  const list = useMemo(
    () =>
      data.map((item) => {
        return (
          <Card
            key={item._id}
            name={item.name}
            price={item.price}
            preview={item.preview}
            manufacturer={item.manufacturer}
            brand={item.brand}
          />
        );
      }),
    [data]
  );

  return <>{list}</>;
};

export default CardList;
