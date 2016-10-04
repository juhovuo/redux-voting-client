import { SET_STATE, VOTE } from './types';

export const setState = (state) => {
	return {
		type: SET_STATE,
		state
	}
}

export const vote = (entry) => {
	return {
		type: VOTE,
		entry
	}
}