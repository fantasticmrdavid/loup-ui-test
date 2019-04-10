import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from 'components/RecipeCard';
import * as styles from './styles';

class RecipeList extends Component {
  constructor(props) {
    super(props);

    const { shouldFetchAll, fetchAllRecipes } = props;
    if (shouldFetchAll) fetchAllRecipes();
  }

  render() {
    const { listing } = this.props;
    const {
      Container,
      List,
    } = styles;
    return (
      <Container>
        <List>
          { listing.map(r => <RecipeCard key={`recipe_${r.contentId}`} {...r} />) }
        </List>
      </Container>
    );
  }
}

RecipeList.propTypes = {
  shouldFetchAll: PropTypes.bool,
  fetchAllRecipes: PropTypes.func.isRequired,
  listing: PropTypes.array.isRequired,
};

export default RecipeList;
