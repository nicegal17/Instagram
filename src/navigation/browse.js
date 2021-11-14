import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BrowseScreen from '../screens/Browse';

const Stack = createStackNavigator();

function BrowseStack() {
  return (
    <Stack.Navigator initialRouteName="BrowseScreen">
      <Stack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default BrowseStack;
