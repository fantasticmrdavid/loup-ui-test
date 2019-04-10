import {
  RECIPES_SEARCHED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  listing: [],
};

const reducers = {
  [RECIPES_SEARCHED]: (state, action) => {
    return {
      ...state,
      listing: action.results,
    };
  },
};

export default createReducer(initialState, reducers);
