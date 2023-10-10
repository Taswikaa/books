import { combineReducers, createStore } from 'redux';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
})

export const store = createStore(rootReducer);