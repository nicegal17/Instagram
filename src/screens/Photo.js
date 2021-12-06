import React, {useEffect, useLayoutEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import HeaderTitle from '../components/HeaderTitle';

import Back from '../assets/svg/back.svg';

import CardItem from '../components/CardItem';
import {useDispatch, useSelector} from 'react-redux';
import {photosSelectors} from '../stores/slices/photosSlice';
import {likePhoto, unLikePhoto} from '../stores/middleware/user';
import {fetchListPhotos} from '../stores/middleware/photos';

const PhotoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const PhotoFile = useSelector(photosSelectors.photo);
  const isLoadingPhoto = useSelector(photosSelectors.isLoadingPhoto);
  const dispatch = useDispatch();

  const onLikePress = async (liked, id) => {
    console.log('liked: ', liked);
    if (liked) {
      console.log('AAAAA');
      await dispatch(unLikePhoto(id));
    } else {
      console.log('BBBBB');
      await dispatch(likePhoto(id));
    }
  };

  const onUserPress = item => {
    navigation.navigate('ProfileScreen', {
      username: item.username,
    });
  };

  // useEffect(() => {
  //   dispatch(fetchListPhotos());
  // }, []);

  useLayoutEffect(() => {
    const username = PhotoFile.user?.username;
    navigation.setOptions({
      headerTitle: <HeaderTitle username={username} />,
      headerRight: () => <TouchableOpacity style={styles.headerButton} />,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}>
          <Back width={24} height={24} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, route, PhotoFile]);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {isLoadingPhoto && <ActivityIndicator size="large" />}
      {!isLoadingPhoto && (
        <CardItem
          userName={PhotoFile?.user?.username}
          address={PhotoFile?.user?.location}
          imageurl={PhotoFile?.urls?.regular}
          userAvatar={PhotoFile?.user?.profile_image.medium}
          likes={PhotoFile?.likes}
          description={PhotoFile?.description}
          onUserPress={() => onUserPress(PhotoFile?.user)}
          onLikePress={() =>
            onLikePress(PhotoFile?.user.liked_by_user, PhotoFile?.user.id)
          }
        />
      )}
    </SafeAreaView>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
