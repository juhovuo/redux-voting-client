import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends Component {

	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

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
	pair: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
	vote: React.PropTypes.func,
	hasVoted: React.PropTypes.string,
	winner: React.PropTypes.string
}

export default Voting;