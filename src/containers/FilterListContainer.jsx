import React from 'react';
import { connect } from 'react-redux';
import { fetchAllFilters } from 'actions/filters';
import FilterList from 'components/FilterList';

const FilterListContainer = (props) => {
  return <FilterList {...props} />;
};

const mapStateToProps = (state) => {
  const { filters } = state;
  return {
    activeCount: filters.active.length,
    listing: filters.listing,
    shouldFetchAll: filters.listing.length === 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllFilters: () => dispatch(fetchAllFilters()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterListContainer);
