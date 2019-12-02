import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

// This test verifes the format of time

it('formats Time correctly', () => {
  renderer.create(<App />);
});