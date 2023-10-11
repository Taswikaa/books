import { combineReducers, createStore } from 'redux';
import { booksReducer} from './booksReducer';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  search: searchReducer
})

export const store = createStore(rootReducer);