import React, { useState, useEffect } from "react";
import placeholderIMG from "../../assets/images/no-photo.jpg"
import "./card.scss"

const Card = ({ name, price, preview, manufacturer, brand }) => {
  const [image, setImage] = useState(placeholderIMG)

  useEffect(() => {
    if (preview.length > 15) {
      setImage(preview)
    }
  }, [preview])

  return (
    <div className="card" data-manufacturer={manufacturer} data-brand={brand}>
      <img
        className="card__image"
        src={image}
        alt="card"
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
