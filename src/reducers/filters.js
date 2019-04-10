import {
  ALL_FILTERS_FETCHED,
  FILTER_ADDED,
  FILTER_REMOVED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  active: [],
  listing: [],
};

const reducers = {
  [ALL_FILTERS_FETCHED]: (state, action) => {
    return {
      ...state,
      listing: action.results,
    };
  },
  [FILTER_ADDED]: (state, action) => {
    return {
      ...state,
      active: [
        ...state.active,
        action.filter,
      ],
    };
  },
  [FILTER_REMOVED]: (state, action) => {
    return {
      ...state,
      active: state.active.filter(f => f !== action.filter),
    };
  },
};

export default createReducer(initialState, reducers);
