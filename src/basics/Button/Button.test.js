import React from 'react';
import Button from './Button';
import {shallow} from 'enzyme';

describe('basics/Button', () => {
	it('Renders a button element', () => {
		const wrapper = shallow(<Button/>);
		expect(wrapper.find('button').length).toEqual(1);
	});
	it('Renders any children as content inside the button', () => {
		const wrapper = shallow(<Button><span id="child">Child</span></Button>);
		expect(wrapper.find('#child').length).toEqual(1);
	});
	it('Renders title prop as title attribute', () => {
		const wrapper = shallow(<Button title="hello world"/>);
		expect(wrapper.find('button[title="hello world"]').length).toEqual(1);
	});
});