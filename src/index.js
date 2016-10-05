import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import configureStore from './configure-store';
import {Provider} from 'react-redux';
import { Map } from 'immutable';

import App from './App';
import Voting from './components/Voting';
import Results from './components/Results';

import './index.css';

const store = configureStore(Map());

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