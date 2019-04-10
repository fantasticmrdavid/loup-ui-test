import {
  searchRecipes,
} from 'actions/recipes';
import { path } from 'ramda';

const queries = [
  {
    filters: [124],
    count: 3,
  },
  {
    filters: [124, 129],
    count: 4,
  },
  {
    filters: [124, 129, 126],
    count: 4,
  },
  {
    filters: [124, 129, 126, 128, 13, 125],
    count: 5,
  },
];

describe('Action -> recipes', () => {
  queries.map((q) => {
    const { filters, count } = q;
    it(`should return ${count} recipes for filtered search with ids [${filters.join(', ')}]`, () => {
      const filterResults = searchRecipes(filters);
      return expect(path(['results', 'length'], filterResults)).toEqual(count);
    });
  });
});
