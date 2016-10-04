import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../actions/creators';

export class Voting extends Component {

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
	pair: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	vote: PropTypes.func,
	hasVoted: PropTypes.string,
	winner: PropTypes.string
}

const mapStateToProps = (state) => ({
	pair: state.getIn(['vote', 'pair']),
	hasVoted: state.get('hasVoted'),
	winner: state.get('winner')
});

export default connect(mapStateToProps, actionCreators)(Voting);