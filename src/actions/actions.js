import SET_STATE from './actionTypes';
import { Map } from 'immutable';

export const setStateAction = (pair, tally) => {
	return {
		type: SET_STATE,
		state: Map({
			vote: Map({
				pair: pair,
				tally: tally
			})
		})
	}
}