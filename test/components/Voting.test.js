import React from 'react';
import ReactDOM from 'react-dom';
import {Voting} from '../../src/components/Voting';
import TestUtils from 'react-addons-test-utils';
import {List} from 'immutable';

describe('Voting', () => {

	it('renders a pair of button', () => {
		const component = TestUtils.renderIntoDocument(
			<Voting pair={['Trainspotting', '28 Days Later']}/>
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

	it('disables buttons when user has voted', () => {
		const component = TestUtils.renderIntoDocument(
			<Voting pair={["Trainspotting", "28 Days Later"]}
							hasVoted="Trainspotting"/>
		);
		const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).toEqual(2);
		expect(buttons[0].hasAttribute('disabled')).toEqual(true);
		expect(buttons[1].hasAttribute('disabled')).toEqual(true);
	});

	it('adds label to the voted entry', () => {
		const component = TestUtils.renderIntoDocument(
			<Voting pair={["Trainspotting", "28 Days Later"]}
							hasVoted="Trainspotting"/>
		);
		const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons[0].textContent).toContain('Voted');
	});

	it('renders just the winner when there is one', () => {
		const component = TestUtils.renderIntoDocument(
			<Voting winner="Trainspotting" />
		);

		const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).toEqual(0);

		const winner = ReactDOM.findDOMNode(component.refs.winner);
		expect(winner).toBeDefined();
		expect(winner.textContent).toContain('Trainspotting');
	});

	it('renders a pure component', () => {
		const pair = ['Trainspotting', '28 Days Later'];
		const container = document.createElement('div');
		let component = ReactDOM.render(
			<Voting pair={pair} />,
			container
			);

		let firstButton = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0];
		expect(firstButton.textContent).toEqual('Trainspotting');

		pair[0] = 'Sunshine';
		component = ReactDOM.render(
			<Voting pair={pair} />, container
		);

		firstButton = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0];

		// Our component is supposed to be pure, so if we give it a mutable array
		// and then caused a mutation inside the array, it should not be re-rendered
		expect(firstButton.textContent).toEqual('Trainspotting');		
	});

	it('does update DOM when a prop changes', () => {
		// Immutable list
		const pair = List.of('Trainspotting', '28 Days Later');
		const container = document.createElement('div');
		let component = ReactDOM.render(<Voting pair={pair}/>, container);

		let firstButton = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0];
		expect(firstButton.textContent).toEqual('Trainspotting');

		const newPair = pair.set(0, 'Sunshine');
		component = ReactDOM.render(
			<Voting pair={newPair} />,
			container
			);

		firstButton = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0];
		expect(firstButton.textContent).toEqual('Sunshine');
	});
});
