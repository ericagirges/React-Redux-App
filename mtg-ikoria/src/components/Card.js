import React from "react";
import styled from "styled-components";

const CardContainer = styled.div `
    width: 400px;
    margin: 20px 0;
`

const StyledImage = styled.img `
    width: 300px;
    height: auto;
`

function Card({ card }) {
  return (
    <CardContainer>
      <StyledImage src={card.image_uris.normal} alt="magic the gathering card" />
    </CardContainer>
  );
}

export default Card;
