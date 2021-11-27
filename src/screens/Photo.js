import React, {useLayoutEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import HeaderTitle from '../components/HeaderTitle';

import Back from '../assets/svg/back.svg';

import CardItem from '../components/CardItem';
import {useSelector} from 'react-redux';
import {photosSelectors} from '../stores/slices/photosSlice';

const PhotoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const PhotoFile = useSelector(photosSelectors.photo);
  const isLoadingPhoto = useSelector(photosSelectors.isLoadingPhoto);

  useLayoutEffect(() => {
    const username = PhotoFile.user?.username;
    navigation.setOptions({
      headerTitle: <HeaderTitle username={username} />,
      headerRight: () => (
        <TouchableOpacity style={styles.headerButton}>
          {/* <View style={styles.buttonView}></View> */}
        </TouchableOpacity>
      ),
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
