import {
  ALL_FILTERS_FETCHED,
  FILTER_ADDED,
  FILTER_REMOVED,
} from 'Constants';
import filters from 'data/filters.json';

export const fetchAllFilters = () => {
  const { contents } = recipes;
  return {
    type: ALL_FILTERS_FETCHED,
    results: contents,
  };
};

export const addFilter = (id) => {
  return {
    type: FILTER_ADDED,
    filter: id,
  };
};

export const removeFilter = (id) => {
  return {
    type: FILTER_REMOVED,
    filter: id,
  };
};
