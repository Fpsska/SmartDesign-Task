import React from "react";
import imageTest from "../../assets/images/no-photo.jpg";
import "./card.scss"

const Card = ({name, price, preview}) => {
  return (
    <div className="card">
      <img className="card__image" src={preview} alt="card" />
      <ul className="card__information information">
        <li className="information__name">name: {name}</li>
        <li className="information__price">price: {price}</li>
      </ul>
    </div>
  );
};

export default Card;
