import React from 'react';
import FilterListContainer from 'containers/FilterListContainer';
import MobileFilterListContainer from 'containers/MobileFilterListContainer';
import RecipeListContainer from 'containers/RecipeListContainer';
import * as styles from './styles';

export default () => {
  const { Container, FilterBar, MobileFilterBar } = styles;
  return (
    <Container>
      <MobileFilterBar>
        <MobileFilterListContainer />
      </MobileFilterBar>
      <RecipeListContainer />
      <FilterBar>
        <FilterListContainer />
      </FilterBar>
    </Container>
  );
};
