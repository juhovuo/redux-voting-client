import React, { Component }  from 'react';

class Winner extends Component {
	render() {
		return (
			<div className="winner">
				Winner is {this.props.winner}!
			</div>
		);
	}
}

Winner.propTypes = {
	winner: React.PropTypes.string
}

export default Winner;