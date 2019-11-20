import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Welcome from './Components/Welcome';
import Result from './Components/result';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});
const RootStack = createStackNavigator(
  {
    Home: { screen: Welcome },
    Results: { screen: Result },
  },
  {
      initialRouteName: 'Home',
  },
  {headerLayoutPreset: 'center'}
  );

const AppContainer = createAppContainer(RootStack);
//const App = createAppContainer(MainNavigator);
export default AppContainer;
