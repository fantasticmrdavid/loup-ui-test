import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import recipes from './recipes';

const persistConfig = {
  recipes: {
    key: 'recipes',
    storage,
  },
};

const reducers = history => combineReducers({
  recipes: persistReducer(persistConfig.recipes, recipes),
  router: connectRouter(history),
});

export default reducers;
