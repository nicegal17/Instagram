import React, {useLayoutEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import RootStack from '.';
import {useNavigation} from '@react-navigation/core';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RootScreen" component={RootStack} />
    </Stack.Navigator>
  );
}

export default MainStack;
