import React from 'react';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from 'actions/filters';
import FilterSelector from 'components/FilterSelector';

const FilterSelectorContainer = (props) => {
  return <FilterSelector {...props} />;
};

const mapStateToProps = (state, ownProps) => {
  const { filters } = state;
  return {
    active: filters.active.indexOf(ownProps.id) !== -1,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    add: () => dispatch(addFilter(id)),
    remove: () => dispatch(removeFilter(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterSelectorContainer);
