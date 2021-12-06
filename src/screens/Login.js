import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {authorize} from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {YOUR_ACCESS_KEY, SECRET_KEY, UNSPLASH_AUTH} from '../constants';

import Instagram from '../assets/svg/instagram.svg';

function Login() {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerShown: false,
    });
  }, [navigation]);

  const config = {
    usePKCE: false, // Important !!
    clientId: YOUR_ACCESS_KEY, // found under App Credentials
    clientSecret: SECRET_KEY, // found under App Credentials
    scopes: [
      'public',
      'read_user',
      'write_likes',
      'write_photos',
      'read_photos',
      'write_followers',
    ], // choose any of the scopes set up in step 1
    redirectUrl: 'com.instagram://oauth', // set up in step 2
    serviceConfiguration: {
      authorizationEndpoint: 'https://unsplash.com/oauth/authorize',
      tokenEndpoint: 'https://unsplash.com/oauth/token',
    },
  };

  const login = async () => {
    try {
      const authState = await authorize(config);
      console.log('au: ', authState);
      await AsyncStorage.setItem(UNSPLASH_AUTH, JSON.stringify(authState));
      navigation.navigate('RootScreen');
    } catch (error) {
      console.log('authorize error: ', error);
    }
  };

  useEffect(() => {
    const authenticate = async () => {
      const value = await AsyncStorage.getItem(UNSPLASH_AUTH);
      if (value) {
        navigation.navigate('RootScreen');
      }
    };
    authenticate();
  }, [route, navigation]);

  return (
    <View>
      <Instagram size={28} style={styles.logo} />
      <View>
        <View style={styles.buttonView}>
          <Button
            buttonStyle={styles.loginBtn}
            titleStyle={styles.leftButtonText}
            title="Log In"
            onPress={login}
          />
        </View>
        <View style={styles.forgotView}>
          <Text style={styles.forgotPass}>Forgot password?</Text>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    marginTop: 300,
    paddingLeft: 400,
  },
  forgotPass: {
    color: '#405DE6',
    fontFamily: 'Tahoma',
    fontWeight: '600',
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  loginBtn: {
    width: 350,
  },
});
