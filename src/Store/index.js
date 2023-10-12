import { combineReducers, createStore } from 'redux';
import { booksReducer} from './booksReducer';
import { searchReducer } from './searchReducer';
import { extendedeDataReducer } from './extendedDataReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  search: searchReducer,
  extendedData: extendedeDataReducer
})

export const store = createStore(rootReducer);