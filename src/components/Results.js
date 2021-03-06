import React, { Component } from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import * as actionCreators from '../actions/creators';

export class Results extends Component {

	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	getPair() {
		return this.props.pair || [];
	}

	getVotes(entry) {
		if (this.props.tally && this.props.tally.has(entry)) {
			return this.props.tally.get(entry);
		}
		return 0;
	}

	render() {
		return this.props.winner ?
			<Winner ref="winner" winner={this.props.winner} /> :
			<div className="results">
				<div className="tally">
				{this.getPair().map(entry =>
					<div key={entry} className="entry">
						<h1>{entry}</h1>
						<div className="voteCount">
							{this.getVotes(entry)}
						</div>
					</div>
				)}
				</div>
					<div className="management">
						<button ref="next"
							className="next"
							onClick={this.props.next}>Next</button>
				</div>
			</div>;
	}
}

Results.propTypes = {
	pair: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
	tally: React.PropTypes.object,
	next: React.PropTypes.func,
	winner: React.PropTypes.string
}

const mapStateToProps = (state) => ({
	pair: state.getIn(['vote', 'pair']),
	tally: state.getIn(['vote', 'tally']),
	winner: state.get('winner')
});

export default connect(
	mapStateToProps,
	actionCreators
)(Results);