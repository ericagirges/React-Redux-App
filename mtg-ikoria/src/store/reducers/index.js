import {
    FETCH_CARDS,
    FETCH_CARDS_ERROR,
    FETCH_CARDS_SUCCESS
} from "../actions";

const initialState = {
    cards: [],
    loadingCards: true,
    errorMessage: ""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CARDS:
        return {
          ...state,
          loadingCards: true
        };
      case FETCH_CARDS_ERROR:
        return {
          ...state, // handle the error
          loadingCards: false,
          errorMessage: action.payload.message
        };
      case FETCH_CARDS_SUCCESS:
        return {
          ...state,
          cards: action.payload,
          loadingCards: false
        };
      default:
        return state;
    }
  };
  