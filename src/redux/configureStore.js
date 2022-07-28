import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
