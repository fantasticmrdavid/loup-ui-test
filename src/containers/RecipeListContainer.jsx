import React from 'react';
import { connect } from 'react-redux';
import { fetchAllRecipes, searchRecipes } from 'actions/recipes';
import RecipeList from 'components/RecipeList';

const RecipeListContainer = (props) => {
  return <RecipeList {...props} />;
};

const mapStateToProps = (state) => {
  const { filters, recipes } = state;
  return {
    listing: recipes.listing,
    shouldFetchAll: filters.active.length === 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllRecipes: () => dispatch(fetchAllRecipes()),
    search: filters => dispatch(searchRecipes(filters)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeListContainer);
