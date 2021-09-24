import React from  "react";
import {shallow} from "enzyme";
import {Label} from  './Label'
import {configure} from 'enzyme';
import renderer from 'react-test-renderer'
const Adapter = require('enzyme-adapter-react-16')

configure({ adapter: new Adapter() });

describe('Label', () => {
    it('should have default render', () => {
        const wrapper = renderer.create(<Label/>).toJSON()
        expect(wrapper).toMatchSnapshot();
    })

    it('should have render with props', () => {
        const wrapper = shallow(<label className={'mock-label'} htmlFor={'unknown-input'}/>);
        expect(wrapper).toMatchSnapshot()
    })
})