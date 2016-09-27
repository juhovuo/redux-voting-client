import React, { Component } from 'react';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends Component {

	render() {
		return (
			<div>
				{this.props.winner ?
					<Winner ref="winner" winner={this.props.winner} /> :
					<Vote {...this.props} />}
			</div>
		);
	}
}

Voting.propTypes = {
	pair : React.PropTypes.array,
	vote : React.PropTypes.func,
	hasVoted: React.PropTypes.string,
	winner: React.PropTypes.string
}

export default Voting;