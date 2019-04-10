import {
  RECIPES_SEARCHED,
} from 'Constants';
import { store } from 'store';
import recipes from 'data/recipes.json';

const testSample = recipes.contents.slice(0, 3);

describe('Reducer -> recipe', () => {
  it('should perform a filtered search and update the store with normalised results', () => {
    const action = {
      type: RECIPES_SEARCHED,
      results: testSample,
    };

    store.dispatch(action);
    expect(store.getState().recipes.listing).toEqual(testSample);
  });
});
