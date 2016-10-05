import createLogger from 'redux-logger';
//import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import io from 'socket.io-client';

import remoteActionMiddleware from './remote_action_middleware';
import { setState } from './actions/creators';
import reducer from './reducer';

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const enhancer = compose(
  //applyMiddleware(thunkMiddleware, createLogger())
  applyMiddleware(remoteActionMiddleware(socket), createLogger())
);

export default function configureStore(initialState) {
	let store = createStore(reducer, initialState, enhancer);
	socket.on('state', state =>
		store.dispatch(setState(state))
	);

	return store;
}
