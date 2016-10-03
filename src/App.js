import React, { Component } from 'react';
import { List, Map } from 'immutable';
//import logo from './logo.svg';
import './App.css';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

class App extends Component {

	render() {
		return React.cloneElement(this.props.children, {
			pair: pair,
			tally: tally
		});

/*
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				<Voting pair={pair} vote={() => {}} hasVoted="Trainspotting" winner="Trainspotting"/>
			</div>
		)
*/
	}
}

App.propTypes = {
	children: React.propTypes.array
}

export default App;
