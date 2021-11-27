import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Instagram from '../../assets/svg/instagram.svg';

const HeaderTitle = ({username}) => {
  console.log('UNAME: ', username);
  if (username) {
    return (
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text>Posts</Text>
      </View>
    );
  } else {
    return <Instagram height={28} />;
  }
};

export default HeaderTitle;

const styles = StyleSheet.create({
  username: {
    fontWeight: '600',
    fontSize: 13,
  },
});
