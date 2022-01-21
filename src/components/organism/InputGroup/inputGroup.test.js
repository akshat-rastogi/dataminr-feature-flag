import React from 'react';
import { shallow } from 'enzyme';
import { InputGroup } from './InputGroup';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("InputGroup", () => {
    it("should render my component", () => {
        const props = {
            "id": "Alerts.AlertManager",
            "name": "Alert Manager",
            "type": "switch",
            "disabled": false,
            "defaultValue": true,
            "flagSize": ""
        }
        const wrapper = shallow(<InputGroup {...props}/>);
        expect(wrapper.getElements()).toMatchSnapshot();
    });
});