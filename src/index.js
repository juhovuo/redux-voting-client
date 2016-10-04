import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import configureStore from './configure-store';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import { Map } from 'immutable';

import App from './App';
import Voting from './components/Voting';
import Results from './components/Results';
import { setState } from './actions/creators';

import './index.css';

const store = configureStore(Map());

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
	store.dispatch(setState(state))
);

const routes = <Route component={App}>
	<Route path="/results" component={Results} />
	<Route path="/" component={Voting} />
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('root')
);