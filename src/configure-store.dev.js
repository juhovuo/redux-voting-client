import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import reducer from './reducer';

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware, createLogger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
