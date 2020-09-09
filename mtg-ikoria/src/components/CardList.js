import React from "react";
import Card from "./Card";

function CardList({cards}) {
    return (
        <div>
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      );
}

export default CardList;