import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import CardList from "./components/CardList";
import { fetchCards } from "./store/actions/ikoriaCardsActions";
import styled from "styled-components";

const AppHeader = styled.header`
  width: 100%;
  text-align: center;
  padding-top: 75px;
  font-family: "Berkshire Swash";
  font-size: 3.5rem;
  height: 300px;
  background: black;
  color: #c93814; ;
`;

const Subtitle = styled.h2`
  font-family: "Overlock";
  font-size: 2.3rem;
  font-style: italic;
  margin-top: 20px;
  color: white;
`;

const AppContainer = styled.div`
  background: whitesmoke;
`;

const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f1f2f6;
  background-image: linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%);
  padding: 30px 0;
  border-bottom: 1px solid #c8c5c5;
  border-top: 1px solid #c8c5c5;

  :hover {
    background: #303A54;
  }
`;

const ColorHeader = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  font-family: "Prompt";
  font-weight: 500;
  font-size: 2.2rem;

  :hover {
    color: white;
  }
`;

function App({ cards, fetchCards }) {
  const [showResults, setShowResults] = React.useState({
    colorless: true,
    black: true,
    blue: true,
    white: true,
    red: true,
    green: true,
  });
  const onClick = (key) =>
    setShowResults({
      ...showResults,
      [key]: !showResults[key],
    });

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <div className="App">
      <AppHeader>
        <h1>Magic the Gathering</h1>
        <Subtitle>Ikoria: Lair of the Behemoths</Subtitle>
      </AppHeader>
      <AppContainer>

        <ColorContainer onClick={() => onClick("colorless")}>
          <ColorHeader>Colorless</ColorHeader>
        </ColorContainer>
        <div className={showResults.colorless ? "hideElement" : "showElement"}>
          <CardList cards={cards.filter((card) => card.colors.length === 0)} />
        </div>

        <ColorContainer onClick={() => onClick("black")}>
          <ColorHeader>Black</ColorHeader>
        </ColorContainer>
        <div className={showResults.black ? "hideElement" : "showElement"}>
          <CardList
            cards={cards.filter(
              (card) => card.colors.length === 1 && card.colors[0] === "B"
            )}
          />
        </div>

        <ColorContainer onClick={() => onClick("blue")}>
          <ColorHeader>Blue</ColorHeader>
        </ColorContainer>
        <div className={showResults.blue ? "hideElement" : "showElement"}>
          <CardList
            cards={cards.filter(
              (card) => card.colors.length === 1 && card.colors[0] === "U"
            )}
          />
        </div>

        <ColorContainer onClick={() => onClick("white")}>
          <ColorHeader>White</ColorHeader>
        </ColorContainer>
        <div className={showResults.white ? "hideElement" : "showElement"}>
          <CardList
            cards={cards.filter(
              (card) => card.colors.length === 1 && card.colors[0] === "W"
            )}
          />
        </div>

        <ColorContainer onClick={() => onClick("red")}>
          <ColorHeader>Red</ColorHeader>
        </ColorContainer>
        <div className={showResults.red ? "hideElement" : "showElement"}>
          <CardList
            cards={cards.filter(
              (card) => card.colors.length === 1 && card.colors[0] === "R"
            )}
          />
        </div>

        <ColorContainer onClick={() => onClick("green")}>
          <ColorHeader>Green</ColorHeader>
        </ColorContainer>
        <div className={showResults.green ? "hideElement" : "showElement"}>
          <CardList
            cards={cards.filter(
              (card) => card.colors.length === 1 && card.colors[0] === "G"
            )}
          />
        </div>

      </AppContainer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cards: state.cards,
    loadingCards: state.loadingCards,
    errorMessage: state.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchCards })(App);
