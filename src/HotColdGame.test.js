import React from 'react';
import {shallow} from 'enzyme';

import HotColdGame from './HotColdGame';

describe('<HotColdGame>', () => {
    it("Should render without crashing", () => {
        shallow(<HotColdGame/>);
    });
});