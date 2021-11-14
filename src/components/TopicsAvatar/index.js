import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UserAvatar from '../UserAvatar';

const TopicsAvatar = ({url, name}) => {
  return (
    <TouchableOpacity style={styles.topicsAvatar}>
      <UserAvatar url={url} />
      <Text style={styles.avatarText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TopicsAvatar;

const styles = StyleSheet.create({
  topicsAvatar: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#262627',
  },
});
