import {
  ALL_FILTERS_FETCHED,
  FILTER_ADDED,
  FILTER_REMOVED,
} from 'Constants';
import { fetchAllRecipes, searchRecipes } from 'actions/recipes';
import filters from 'data/filters.json';

export const fetchAllFilters = () => {
  const { contents } = filters;
  return {
    type: ALL_FILTERS_FETCHED,
    results: contents,
  };
};

export const addFilter = id => (dispatch) => {
  dispatch({
    type: FILTER_ADDED,
    filter: id,
  });
  dispatch(searchRecipes());
};

export const removeFilter = id => (dispatch, getState) => {
  dispatch({
    type: FILTER_REMOVED,
    filter: id,
  });

  const { filters: stateFilters } = getState();
  return stateFilters.active.length > 0 ? dispatch(searchRecipes()) : dispatch(fetchAllRecipes());
};
