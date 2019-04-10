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
    const { listing, shouldFetchAll } = this.props;
    const {
      Container,
      List,
      Message,
    } = styles;
    return (
      <Container>
        {
          listing.length === 0 && !shouldFetchAll && <Message>No recipes found with selected filters :(</Message>
        }
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
