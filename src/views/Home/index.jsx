import React from 'react';
import FilterListContainer from 'containers/FilterListContainer';
import RecipeListContainer from 'containers/RecipeListContainer';
import * as styles from './styles';

export default () => {
  const { Container, FilterBar } = styles;
  return (
    <Container>
      <RecipeListContainer />
      <FilterBar>
        <FilterListContainer />
      </FilterBar>
    </Container>
  );
};
