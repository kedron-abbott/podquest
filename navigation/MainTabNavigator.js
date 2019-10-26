import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PodquestScreen from '../screens/PodquestScreen';
import AccountScreen from '../screens/AccountScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const PodquestStack = createStackNavigator(
  {
    Podquest: PodquestScreen,
  },
  config
);

PodquestStack.navigationOptions = {
  tabBarLabel: 'PodQuest',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-mic' : 'md-mic'}
    />
  ),
};

PodquestStack.path = '';

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
  },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

AccountStack.path = '';

const tabNavigator = createBottomTabNavigator({
  PodquestStack,
  AccountStack,
});

tabNavigator.path = '';

export default tabNavigator;
