import {
  ALL_RECIPES_FETCHED,
  RECIPES_SEARCHED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  listing: [],
};

const reducers = {
  [ALL_RECIPES_FETCHED]: (state, action) => {
    return {
      ...state,
      listing: action.results,
    };
  },
  [RECIPES_SEARCHED]: (state, action) => {
    return {
      ...state,
      listing: action.results,
    };
  },
};

export default createReducer(initialState, reducers);
