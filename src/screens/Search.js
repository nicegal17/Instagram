import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import {Input} from 'react-native-elements';

import {YOUR_ACCESS_KEY} from '../constants';

import axios from 'axios';
import FastImage from 'react-native-fast-image';

const SearchScreen = () => {
  const [PhotosArr, setPhotosArr] = useState([]);

  const loadPhotos = searchParams => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?per_page=50&query=${searchParams}`,
        {
          headers: {
            Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
          },
        },
      )
      .then(function (response) {
        // handle success
        console.log('Photos: ', response.data.results);
        setPhotosArr(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log('error.message: ', error.message);
      });
  };

  const renderItem = ({item}) => {
    console.log('renderItem: ', item);
    return (
      <FastImage
        source={{
          uri: item.urls.regular,
          priority: FastImage.priority.normal,
        }}
        style={styles.mainImage}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle="default" />
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
            size: 25,
          }}
          onChangeText={value => loadPhotos(value)}
        />
      </View>
      <FlatList
        style={styles.photos}
        data={PhotosArr}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  background: {
    backgroundColor: 'white',
  },
  SearchBar: {
    marginTop: 10,
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
    fontSize: 14,
    fontWeight: '400',
    color: '#B7B7B7',
  },
  photos: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainImage: {
    height: 150,
    width: 150,
    margin: 1,
  },
});
