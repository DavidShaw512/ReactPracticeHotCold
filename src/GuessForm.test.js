import React from 'react';
import {shallow} from 'enzyme';

import GuessForm from './GuessForm'

describe('<GuessForm>', () => {
    it("Should render without crashing", () => {
        shallow(<GuessForm/>);
    });
});