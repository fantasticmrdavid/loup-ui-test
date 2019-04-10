import {
  RECIPES_SEARCHED,
} from 'Constants';

import recipes from 'data/recipes.json';

export const searchRecipes = filters => {
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
