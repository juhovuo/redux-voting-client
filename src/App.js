import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Fokus' awesome voting app</h2>
				</div>
				<p className="App-intro">
					Start Voting
				</p>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object
}

export default App;
