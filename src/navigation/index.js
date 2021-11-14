import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './home';
import SearchStack from './search';
import BrowseStack from './browse';
import LikesStack from './likes';
import ProfileStack from './profile';

import HomeSVG from '../assets/svg/home.svg';
import SearchSVG from '../assets/svg/search.svg';
import BrowseSVG from '../assets/svg/browse.svg';
import LikesSVG from '../assets/svg/likes.svg';
import ProfileSVG from '../assets/svg/profile.svg';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: () => {
            return <HomeSVG width={24} height={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: () => {
            return <SearchSVG width={24} height={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseStack}
        options={{
          tabBarIcon: () => {
            return <BrowseSVG width={24} height={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesStack}
        options={{
          tabBarIcon: () => {
            return <LikesSVG width={24} height={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: () => {
            return <ProfileSVG width={24} height={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
