import React from 'react';
import Voting from '../../src/components/Voting';
import TestUtils from 'react-addons-test-utils';

describe('Voting', () => {

	it('renders a pair of button', () => {
		const component = TestUtils.renderIntoDocument(
			<Voting pair={["Trainspotting", "28 Days Later"]} vote={() => {}}/>
		);
		const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).toEqual(2);
		expect(buttons[0].textContent).toEqual('Trainspotting');
		expect(buttons[1].textContent).toEqual('28 Days Later');

	});

	it('invokes a callback when a button is clicked', () => {
		let votedWith;
		const vote = (entry) => votedWith = entry;

		const component = TestUtils.renderIntoDocument(
			<Voting pair={["Trainspotting", "28 Days Later"]} vote={vote} />
		);
		const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
		TestUtils.Simulate.click(buttons[0]);

		expect(votedWith).toEqual('Trainspotting');
	});

});