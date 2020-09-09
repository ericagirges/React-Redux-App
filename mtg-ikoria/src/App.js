import React, { useEffect } from "react";
import "./App.sass";
import { connect } from "react-redux";
import CardList from "./components/CardList";
import { fetchCards } from "./store/actions/ikoriaCardsActions";

function App({ cards, fetchCards }) {
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <div className="App">
      <header>
      <h1 className="title is-centered">Magic the Gathering</h1>
      <h2 className="is-centered">Ikoria: Lair of the Behemoths</h2>
      </header>
      <div className="tabs is-centered is-toggle">
        <ul>
      <div>
        <li className="is-active"><a>Colorless</a></li>
        <CardList
          cards={cards.filter((card) => card.color_identity.length === 0)}
        />
      </div>
      <div>
        <li><a>Black</a></li>
        <CardList
          cards={cards.filter(
            (card) =>
              card.color_identity.length === 1 && card.color_identity[0] === "B"
          )}
        />
      </div>
      <div>
        <li><a>Blue</a></li>
        <CardList
          cards={cards.filter(
            (card) =>
              card.color_identity.length === 1 && card.color_identity[0] === "U"
          )}
        />
      </div>
      <div>
        <li><a>White</a></li>
        <CardList
          cards={cards.filter(
            (card) =>
              card.color_identity.length === 1 && card.color_identity[0] === "W"
          )}
        />
      </div>
      <div>
        <li><a>Red</a></li>
        <CardList
          cards={cards.filter(
            (card) =>
              card.color_identity.length === 1 && card.color_identity[0] === "R"
          )}
        />
      </div>
      <div>
        <li><a>Multi-Color</a></li>
        <CardList
          cards={cards.filter((card) => card.color_identity.length > 1)}
        />
      </div>
      </ul>
      </div>
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
