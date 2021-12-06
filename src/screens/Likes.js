import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useLayoutEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  RefreshControl,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import CardItem from '../components/CardItem';

import {fetchLikedPhotos, unLikePhoto} from '../stores/middleware/user';
import {userSelector} from '../stores/slices/userSlice';

const LikesScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const AllLikedPhotos = useSelector(userSelector.likedPhotos);
  const User = useSelector(userSelector.user);
  const [refreshing, setRefreshing] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerShown: false,
    });
  });

  const unLikePress = async id => {
    await dispatch(unLikePhoto(id));
    dispatch(fetchLikedPhotos(User?.username));
  };

  const renderItem = ({item}) => {
    return (
      <CardItem
        userName={item.user.username}
        address={item.user.location}
        imageurl={item.urls.regular}
        liked={item.liked_by_user}
        userAvatar={item.user.profile_image.medium}
        description={item.description}
        onLikePress={() => unLikePress(item.id)}
      />
    );
  };

  const headerItem = () => {
    return (
      <View style={styles.headerItem}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
      </View>
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchLikedPhotos(User?.username));
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [User]);

  useEffect(() => {
    dispatch(fetchLikedPhotos(User?.username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [User]);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={AllLikedPhotos}
        ListHeaderComponent={headerItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default LikesScreen;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  background: {
    backgroundColor: 'white',
  },
  mainImage: {
    height: 150,
    width: 150,
    margin: 1,
  },
  headerItem: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
  },
});
