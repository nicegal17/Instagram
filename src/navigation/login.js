import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

import Instagram from '../assets/svg/instagram.svg';

function LoginStack() {
  return (
    <View>
      <Instagram size={28} style={styles.logo} />
      <View>
        <Input
          containerStyle={styles.StyleContainer}
          inputContainerStyle={styles.Container}
          inputStyle={styles.SearchText}
          placeholder="Phone number, username or email address"
        />
        <Input
          containerStyle={styles.StyleContainer}
          inputContainerStyle={styles.Container}
          inputStyle={styles.SearchText}
          placeholder="Password"
        />
        <View style={styles.forgotView}>
          <Text style={styles.forgotPass}>Forgotten password?</Text>
        </View>
        <View>
          <Button
            containerStyle={styles.leftButtonContainer}
            titleStyle={styles.leftButtonText}
            title="Log In"
          />
          {/* <Button
            buttonStyle={styles.rightButton}
            title=""
            icon={{
              name: 'caret-down',
              size: 15,
              color: 'white',
              type: 'ionicon',
            }}
          /> */}
        </View>
      </View>
    </View>
  );
}

export default LoginStack;

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
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 15,
    marginTop: 18,
  },
});
