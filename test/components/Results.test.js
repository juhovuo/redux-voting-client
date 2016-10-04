import React from 'react';
import ReactDOM from 'react-dom';
import { Results } from '../../src/components/Results';
import TestUtils from 'react-addons-test-utils';
import { List, Map } from 'immutable';

describe('Results', () => {

	it('renders entries with vote counts or zero', () => {
		const pair = List.of('Trainspotting', '28 Days Later');
		const tally = Map({'Trainspotting': 5});
		const component = TestUtils.renderIntoDocument(
			<Results pair={pair} tally={tally} />
			);

		const entries = TestUtils.scryRenderedDOMComponentsWithClass(component, 'entry');
		const [train, days] = entries.map(e => e.textContent);

		expect(entries.length).toEqual(2);
		expect(train).toContain('Trainspotting');
		expect(train).toContain('5');
		expect(days).toContain('28 Days Later');
		expect(days).toContain('0');
	});

	it('invokes the next callback when next button is clicked', () => {
		let nextInvoked = false;
		const next = () => nextInvoked = true;

		const pair = List.of('Trainspotting', '28 Days Later');
		const component = TestUtils.renderIntoDocument(
			<Results pair={pair}
			tally={Map()}
			next={next}/>
			);
		TestUtils.Simulate.click(ReactDOM.findDOMNode(component.refs.next));

		expect(nextInvoked).toEqual(true);
	});

	it('renders the winner when there is one', () => {
		const component = TestUtils.renderIntoDocument(
			<Results winner="Trainspotting"
			pair={["Trainspotting", "28 Days Later"]}
			tally={Map()} />
			);
		const winner = ReactDOM.findDOMNode(component.refs.winner);
		expect(winner).toBeDefined();
		expect(winner.textContent).toContain('Trainspotting');	});
});
