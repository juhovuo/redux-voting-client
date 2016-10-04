import { Map } from 'immutable';
import { SET_STATE } from './actions/actionTypes';

const initialState = Map();

function setState(state, newState) {
	return state.merge(newState);
}

export default function(state = initialState, action) {

	switch(action.type) {
		case SET_STATE:
			return setState(state, action.state);
		default:
			return state;
	}
}