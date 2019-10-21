import React from 'react';
import Welcome from '../Components/Welcome';

import renderer from 'react-test-renderer';
//import App from '../App';

/*
This test verifies that the rendered output compares exactly to the snapshot

Snapshot testing is used for testing components in React Native Apps

For more infor on Snapshot testing, link => https://jestjs.io/docs/en/snapshot-testing
*/

test('renders correctly', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
       
})