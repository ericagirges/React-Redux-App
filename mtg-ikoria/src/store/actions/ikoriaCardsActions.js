import axios from "axios";

// ACTION TYPES
export const FETCH_CARDS = "FETCH_CARDS";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR";

// ACTION CREATORS
export const fetchCards = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_CARDS });
    axios
      .get("https://api.scryfall.com/cards/search?order=set&q=e%3Aiko&unique=prints")
      .then((response) => {
        dispatch({ type: FETCH_CARDS_SUCCESS, payload: response.data.data });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CARDS_ERROR,
          payload: { message: "Oops. We can't find the cards you're looking for right now." }
        });
      });
  };
};