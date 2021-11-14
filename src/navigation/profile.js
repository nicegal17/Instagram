import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {YOUR_ACCESS_KEY} from '../constants';

import ProfileScreen from '../screens/Profile';

import Account from '../assets/svg/account.svg';
import Settings from '../assets/svg/settings.svg';

import axios from 'axios';

const Stack = createStackNavigator();

function ProfileStack() {
  const [Item, setItem] = useState({});
  const route = useRoute();
  const navigation = useNavigation();

  const loadPublicProfile = () => {
    axios
      .get('https://api.unsplash.com/users/jonasleupe', {
        headers: {
          Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
        },
      })
      .then(function (response) {
        // handle success
        console.log('ITEMSSSS: ', response.data);
        setItem(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log('error.message: ', error.message);
      });
  };

  useEffect(() => {
    loadPublicProfile();
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerTitle: <Text>{Item.instagram_username}</Text>,
        headerRight: () => (
          <TouchableOpacity style={styles.headerButton}>
            <Settings width={24} height={24} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity style={styles.headerButton}>
            <Account width={24} height={24} />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;

const styles = StyleSheet.create({
  headerButton: {
    margin: 12,
  },
});
