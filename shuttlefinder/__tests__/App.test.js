import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

// This test verifies that the app renders properly

it('renders correctly', () => {
  renderer.create(<App />);
});
