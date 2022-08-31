import React from "react";
import Card from "./Card";
import "./card.scss";

const CardList = (props) => {

  const { filteredData = [] } = props;

  return (
    <>
      {
        filteredData.map((item) => {
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
        })
      }
    </>
  )
};

export default CardList;
