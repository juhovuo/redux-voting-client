import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import reducer from './reducer';

const enhancer = compose(
  applyMiddleware(thunkMiddleware, createLogger())
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
