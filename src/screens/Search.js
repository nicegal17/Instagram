import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import {Input} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

import {useDispatch, useSelector} from 'react-redux';

import {fetchSearchPhotos} from '../stores/middleware/photos';
import {photosSelectors} from '../stores/slices/photosSlice';

import {fetchPhoto} from '../stores/middleware/photos';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const [PhotosArr, setPhotosArr] = useState([]);
  const [search, setSearch] = useState('');
  const AllPhotos = useSelector(photosSelectors.photos);
  const SearchPhotos = useSelector(photosSelectors.searchedPhotos);
  const navigation = useNavigation();

  const onPhotoPress = item => {
    dispatch(fetchPhoto(item.id));
    navigation.navigate('PhotoScreen');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onPhotoPress(item)}>
        <FastImage
          source={{
            uri: item.urls.regular,
            priority: FastImage.priority.normal,
          }}
          style={styles.mainImage}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (!isEmpty(search)) {
      setPhotosArr(SearchPhotos);
    } else {
      setPhotosArr(AllPhotos);
    }
  }, [SearchPhotos, AllPhotos, search]);

  const handleSearch = debounce(text => {
    setSearch(text);
    dispatch(fetchSearchPhotos(text));
  }, 600);

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
          onChangeText={value => handleSearch(value)}
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
