import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div `
 display: flex;
 flex-wrap: wrap;
 justify-content: space-evenly;
 padding: 20px 30px;
`

function CardList({cards}) {
    return (
        <CardsContainer>
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </CardsContainer>
      );
}

export default CardList;