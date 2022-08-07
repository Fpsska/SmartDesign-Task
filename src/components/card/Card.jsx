import React from "react";

import placeholderIMG from "../../assets/images/no-photo.jpg";

import "./card.scss";

const Card = ({ name, price, preview, manufacturer, brand }) => {
  return (
    <div className="card" data-manufacturer={manufacturer} data-brand={brand}>
      <img
        className="card__image"
        src={preview ? preview : placeholderIMG}
        alt="goods-img"
        onError={e => {
          e.target.src = placeholderIMG;
          e.onerror = null;
        }}
      />
      <ul className="card__information information">
        <li className="information__name">name: {name}</li>
        <li className="information__price">price: {`${price}$`}</li>
      </ul>
    </div>
  );
};

export default Card;
