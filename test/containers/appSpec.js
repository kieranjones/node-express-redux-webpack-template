import chai from 'chai'
import React from 'react'
import App from '../src/containers/app'
import { shallow } from 'enzyme'

let expect = chai.expect;

describe('<App/>', () => {
    "use strict";
    it('renders one <h1> tag', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1')).to.have.length(1)
    });
});