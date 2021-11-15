import React from 'react';
import {View, Text} from 'react-native';

import Instagram from '../../assets/svg/instagram.svg';

const HeaderTitle = ({username}) => {
  console.log('uname: ', username);
  if (username) {
    console.log('dsadasd');
    return (
      <View>
        <Text>{username}</Text>
      </View>
    );
  } else {
    return <Instagram height={28} />;
  }
};

export default HeaderTitle;
