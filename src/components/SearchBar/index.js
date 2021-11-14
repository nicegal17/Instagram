import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

import Colors from '../../../theme/Colors';

const SearchBar = () => {
  return (
    <View style={styles.SearchBar}>
      <Input
        containerStyle={styles.StyleContainer}
        inputContainerStyle={styles.Container}
        inputStyle={styles.SearchText}
        placeholder="Search"
        leftIcon={{
          type: 'feather',
          name: 'search',
          color: '#B7B7B7',
          size: 20,
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  SearchBar: {
    marginTop: 10,
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 10,
  },
  StyleContainer: {
    marginBottom: -20,
    paddingBottom: 0,
  },
  Container: {
    backgroundColor: '#DFE2E6',
    borderRadius: 5,
    borderBottomWidth: 0,
    paddingHorizontal: 14,
  },
  SearchText: {
    fontFamily: 'SF Pro Text',
    fontSize: 14,
    fontWeight: '400',
    color: '#B7B7B7',
    lineHeight: 16,
    letterSpacing: 0.01,
    opacity: 100,
  },
  search: {
    width: 328,
    height: 44,
    backgroundColor: '#E9E9EB',
    borderRadius: 10,
  },
});
