import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LikeScreen from '../screens/Likes';

const Stack = createStackNavigator();

function LikesStack() {
  return (
    <Stack.Navigator initialRouteName="LikeScreen">
      <Stack.Screen name="LikeScreen" component={LikeScreen} />
    </Stack.Navigator>
  );
}

export default LikesStack;
