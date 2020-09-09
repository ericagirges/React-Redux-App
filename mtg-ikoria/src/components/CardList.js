import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { fetchCards } from '../store/actions/ikoriaCardsActions'

function CardList({ cards, fetchCards }) {
    useEffect(() => {
        fetchCards();
    }, [fetchCards]);

  return (
    <>
      <h3>Ikoria: Lair of the Behemoths</h3>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
}

export default connect(mapStateToProps, { fetchCards })(CardList);