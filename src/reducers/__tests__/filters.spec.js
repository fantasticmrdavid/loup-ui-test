import {
  FILTER_ADDED,
  FILTER_REMOVED,
} from 'Constants';
import { store } from 'store';

const addTests = [
  {
    id: 124,
    expectedResult: [124],
  },
  {
    id: 129,
    expectedResult: [124, 129],
  },
  {
    id: 126,
    expectedResult: [124, 129, 126],
  },
  {
    id: 13,
    expectedResult: [124, 129, 126, 13],
  },
];

const removeTests = [
  {
    id: 124,
    expectedResult: [129, 126, 13],
  },
  {
    id: 126,
    expectedResult: [129, 13],
  },
  {
    id: 128,
    expectedResult: [129, 13],
  },
  {
    id: 13,
    expectedResult: [129],
  },
];

describe('Reduer -> filters', () => {
  addTests.map((t) => {
    const { id, expectedResult } = t;
    it(`should add ${id} to the active filter list`, () => {
      const action = {
        type: FILTER_ADDED,
        filter: id,
      };
      store.dispatch(action);
      expect(store.getState().filters.active).toEqual(expectedResult);
    });
  });

  removeTests.map((t) => {
    const { id, expectedResult } = t;
    it(`should remove ${id} from the active filter list`, () => {
      const action = {
        type: FILTER_REMOVED,
        filter: id,
      };
      store.dispatch(action);
      expect(store.getState().filters.active).toEqual(expectedResult);
    });
  });
});
