import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {TouchableOpacity} from 'react-native-gesture-handler';

import ViewPhotoScreen from '../screens/Photo';

const Stack = createStackNavigator();

function viewPhotoStack() {
  return (
    <Stack.Navigator
      initialRouteName="ViewPhotoScreen"
      screenOptions={{
        headerTitle: <Text>HHHH</Text>,
        headerRight: () => (
          <TouchableOpacity>
            {/* <Settings width={24} height={24} /> */}
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity>
            {/* <Account width={24} height={24} /> */}
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="ViewPhotoScreen" component={ViewPhotoScreen} />
    </Stack.Navigator>
  );
}

export default viewPhotoStack;
