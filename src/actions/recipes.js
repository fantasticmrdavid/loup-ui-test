import {
  ALL_RECIPES_FETCHED,
  RECIPES_SEARCHED,
} from 'Constants';
import request from 'helpers/api';

export const fetchAllRecipes = () => (dispatch) => {
  return request('http://localhost:3000/recipes')
    .then((res) => {
      const { contents } = res;
      dispatch({
        type: ALL_RECIPES_FETCHED,
        results: contents,
      });
    });
};

export const searchRecipes = () => (dispatch, getState) => {
  const { filters } = getState();
  return dispatch(
    request('http://localhost:3000/recipes')
      .then((res) => {
        const { contents } = res;
        return dispatch({
          type: RECIPES_SEARCHED,
          results: contents.filter((r) => {
            const { tags } = r;
            return tags.reduce((a, t) => {
              return !a ? filters.active.indexOf(t.id) !== -1 : true;
            }, false);
          }),
        });
      }),
  );
};
