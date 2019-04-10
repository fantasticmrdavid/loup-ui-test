import {
  ALL_RECIPES_FETCHED,
  RECIPES_SEARCHED,
} from 'Constants';
import recipes from 'data/recipes.json';

export const fetchAllRecipes = () => {
  const { contents } = recipes;
  return {
    type: ALL_RECIPES_FETCHED,
    results: contents,
  };
};

export const searchRecipes = (filters) => {
  const { contents } = recipes;
  return {
    type: RECIPES_SEARCHED,
    results: contents.filter((r) => {
      const { tags } = r;
      return tags.reduce((a, t) => {
        return !a ? filters.indexOf(t.id) !== -1 : true;
      }, false);
    }),
  };
};
