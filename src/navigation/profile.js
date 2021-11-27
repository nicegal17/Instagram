import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActionSheetIOS, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {YOUR_ACCESS_KEY} from '../constants';

import ProfileScreen from '../screens/Profile';
import PhotoScreen from '../screens/Photo';

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

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Settings',
          'Archive',
          'Your Activity',
          'QR code',
          'Saved',
          'Close friends',
          'Covid-19 Information Centre',
        ],
        destructiveButtonIndex: 1,
        userInterfaceStyle: 'light',
        tintColor: 'black',
        fontSize: 14,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 0) {
          setResult('🔮');
        }
      },
    );

  useEffect(() => {
    loadPublicProfile();
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerTitle: <Text>{Item.instagram_username}</Text>,
        headerRight: () => (
          <TouchableOpacity style={styles.headerButton} onPress={onPress}>
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
      <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;

const styles = StyleSheet.create({
  headerButton: {
    margin: 12,
  },
});
