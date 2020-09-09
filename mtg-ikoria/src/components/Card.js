import React from "react";

function Card({ card }) {
  return <div><img src={card.image_uris.small} alt="magic the gathering card"/></div>;
}

export default Card;