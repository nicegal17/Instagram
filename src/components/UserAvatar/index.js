import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import PropTypes from 'prop-types';

const UserAvatar = ({url, size}) => {
  return (
    <View>
      <Avatar
        source={{
          uri: url,
        }}
        rounded
        size={size}
      />
    </View>
  );
};

UserAvatar.propTypes = {
  size: PropTypes.number,
};

UserAvatar.defaultProps = {
  size: 64,
};

export default UserAvatar;
