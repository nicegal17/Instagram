import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import CardItem from '../components/CardItem';

import TopicsArr from '../api/fake/topics.json';
import TopicsAvatar from '../components/TopicsAvatar';

import {useDispatch, useSelector} from 'react-redux';
import {fetchListPhotos} from '../stores/middleware/photos';
import {photosSelectors} from '../stores/slices/photosSlice';
import {likePhoto, unLikePhoto} from '../stores/middleware/user';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const PhotosArr = useSelector(photosSelectors.photos);

  useEffect(() => {
    dispatch(fetchListPhotos());
  }, []);

  const onUserPress = item => {
    navigation.navigate('ProfileScreen', {
      username: item.username,
    });
  };

  const onLikePress = async (liked, id) => {
    if (liked) {
      await dispatch(unLikePhoto(id));
    } else {
      await dispatch(likePhoto(id));
    }
  };

  const renderItem = ({item}) => {
    return (
      <CardItem
        userName={item.user.username}
        address={item.user.location}
        imageurl={item.urls.regular}
        userAvatar={item.user.profile_image.medium}
        likes={item.likes}
        liked={item.liked_by_user}
        description={item.description}
        onUserPress={() => onUserPress(item.user)}
        onLikePress={() => onLikePress(item.liked_by_user, item.id)}
      />
    );
  };

  const headerItem = () => {
    return (
      <View style={styles.headerItem}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          {TopicsArr.map((item, index) => {
            return (
              <TopicsAvatar
                key={index}
                url={item.cover_photo.urls.small}
                name={item.title}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <FlatList
        data={PhotosArr}
        ListHeaderComponent={headerItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerButton: {
    margin: 12,
  },
  SafeAreaView: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headerItem: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
  },
});

// const [PhotosArr, setPhotosArr] = useState([]);

// const loadHomePics = () => {
//   axios
//     .get('https://api.unsplash.com/photos?per_page=50', {
//       headers: {
//         Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
//       },
//     })
//     .then(function (response) {
//       // handle success
//       console.log('response.data: ', response.data);
//       setPhotosArr(response.data);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log('error.message: ', error.message);
//     });
// };
