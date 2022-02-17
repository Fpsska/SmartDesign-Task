import React from "react";
import Card from "./Card";
import "./card.scss";
import { FetchMongoData } from "../../hooks/request";
import { useEffect } from "react";
import { useState } from "react";

const CardList = () => {
  const { loading, error, request } = FetchMongoData();
  const [data, setData] = useState([]);

  const getMongoData = async () => {
    try {
      const data = await request("GET", "http://localhost:8080/cards");
      setData(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getMongoData();
  }, []);

  const list = data.map((item) => {
    return <Card key={item.id} name={item.name} price={item.price} />;
  });

  return <div className="search__list">{list}</div>;
};

export default CardList;
