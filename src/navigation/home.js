import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

import Instagram from '../assets/svg/instagram.svg';
import Camera from '../assets/svg/camera.svg';
import Share from '../assets/svg/share.svg';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
import PhotoScreen from '../screens/Photo';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTitle: props => <Instagram height={28} {...props} />,
        headerRight: () => (
          <TouchableOpacity style={styles.headerButton}>
            <Share width={24} height={24} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity style={styles.headerButton}>
            <Camera width={24} height={24} />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;

const styles = StyleSheet.create({
  headerButton: {
    margin: 12,
  },
});
