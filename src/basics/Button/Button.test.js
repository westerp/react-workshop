import React from 'react';
import Button from './Button';
import {shallow} from 'enzyme';

describe('Basic test of Button', () => {
	it('Renders a button element', () => {
		const wrapper = shallow(<Button/>);
		expect(wrapper.find('button').length).toEqual(1);
	})
});