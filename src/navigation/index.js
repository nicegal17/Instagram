import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useLayoutEffect} from 'react';
import HomeStack from './home';
import SearchStack from './search';
import BrowseStack from './browse';
import LikesStack from './likes';
import ProfileStack from './profile';

import HomeSVG from '../assets/svg/home.svg';
import HomeActiveSVG from '../assets/svg/home-active.svg';
import SearchSVG from '../assets/svg/search.svg';
import SearchActiveSVG from '../assets/svg/search-active.svg';
import BrowseSVG from '../assets/svg/browse.svg';
import LikesSVG from '../assets/svg/likes.svg';
import LikedActiveSVG from '../assets/svg/liked-active.svg';
import ProfileSVG from '../assets/svg/profile.svg';
import ProfileActiveSVG from '../assets/svg/profile-active.svg';
import {useNavigation} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <HomeActiveSVG width={24} height={24} />
            ) : (
              <HomeSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <SearchActiveSVG width={24} height={24} />
            ) : (
              <SearchSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <SearchActiveSVG width={24} height={24} />
            ) : (
              <BrowseSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <LikedActiveSVG width={28} height={28} />
            ) : (
              <LikesSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <ProfileActiveSVG width={24} height={24} />
            ) : (
              <ProfileSVG width={24} height={24} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
