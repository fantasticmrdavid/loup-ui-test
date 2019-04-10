import {
  RECIPES_SEARCHED,
} from 'Constants';

import recipes from 'data/recipes.json';

export const searchRecipes = filters => (dispatch) => {
  return dispatch({
    type: RECIPES_SEARCHED,
    results: recipes.filter((r) => {
      const { tags } = r;
      return tags.reduce((a, t) => (!!a ? filters.indexOf(t) !== -1 : false), true);
    }),
  });
};
