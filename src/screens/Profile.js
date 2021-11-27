import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Button, ButtonGroup} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';

import GridViewSVG from '../assets/svg/gridview.svg';
import ListViewSVG from '../assets/svg/listview.svg';
import TaggedSVG from '../assets/svg/tagged.svg';
import Back from '../assets/svg/back.svg';
import Notification from '../assets/svg/notifications.svg';
import Elipsis from '../assets/svg/ellipsis-horizontal.svg';

import UserAvatar from '../components/UserAvatar';
import HeaderTitle from '../components/HeaderTitle';

import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../stores/slices/userSlice';
import {
  fetchUserInfo,
  fetchUserPhotos,
  fetchSelectedUser,
  fetchSelectedUserPhotos,
} from '../stores/middleware/user';
import {fetchPhoto} from '../stores/middleware/photos';

const ProfileScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [Item, setItem] = useState({});
  const [PhotosArr, setPhotos] = useState([]);
  const navigation = useNavigation();

  const User = useSelector(userSelector.user);
  const UserPhotos = useSelector(userSelector.userPhotos);
  const SelectedUser = useSelector(userSelector.selectedUser);
  const SelectedUserPhotos = useSelector(userSelector.selectedUserPhotos);

  const isLoadingUser = useSelector(userSelector.isLoadingUser);
  const isLoadingUserPhotos = useSelector(userSelector.isLoadingUserPhotos);

  const loadPublicProfile = async () => {
    dispatch(fetchUserInfo('jonasleupe'));
    dispatch(fetchUserPhotos('jonasleupe'));
  };

  const loadSelectedProfile = async username => {
    dispatch(fetchSelectedUser(username));
    dispatch(fetchSelectedUserPhotos(username));
  };

  const onPhotoPress = item => {
    dispatch(fetchPhoto(item.id));
    navigation.navigate('PhotoScreen');
  };

  useLayoutEffect(() => {
    const username = route.params?.username;
    if (username) {
      navigation.setOptions({
        headerTitle: <HeaderTitle username={username} />,
        headerRight: () => (
          <TouchableOpacity style={styles.headerButton}>
            <View style={styles.buttonView}>
              <Notification width={24} height={24} />
              <Elipsis width={24} height={24} />
            </View>
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
    }
  }, [navigation, route, Item]);

  useEffect(() => {
    const username = route.params?.username;
    if (username) {
      setItem(SelectedUser);
      setPhotos(SelectedUserPhotos);
    } else {
      setItem(User);
      setPhotos(UserPhotos);
    }
  }, [route, User, UserPhotos, SelectedUser, SelectedUserPhotos]);

  useEffect(() => {
    const username = route.params?.username;
    if (username) {
      loadSelectedProfile(username);
    } else {
      loadPublicProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

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

  const [selectedIndex, setSelectedIndex] = useState(0);

  const gridViewTab = () => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <GridViewSVG width={20} height={20} />
      </TouchableOpacity>
    );
  };

  const listViewTab = () => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <ListViewSVG width={20} height={20} />
      </TouchableOpacity>
    );
  };

  const taggedTab = () => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <TaggedSVG width={20} height={20} />
      </TouchableOpacity>
    );
  };

  const buttons = [
    {
      element: gridViewTab,
    },
    {
      element: listViewTab,
    },
    {
      element: taggedTab,
    },
  ];

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      {isLoadingUser && <ActivityIndicator size="large" />}
      {!isLoadingUser && (
        <>
          <View style={styles.account}>
            <UserAvatar url={Item?.profile_image?.small} size={80} />
            <View style={styles.header}>
              <View style={styles.textHeaders}>
                <View style={styles.textCenter}>
                  <Text style={styles.textValue}>{Item?.total_photos}</Text>
                  <Text style={styles.textUnder}>posts</Text>
                </View>
                <View style={styles.textCenter}>
                  <Text style={styles.textValue}>{Item?.followers_count}</Text>
                  <Text style={styles.textUnder}>followers</Text>
                </View>
                <View style={styles.textCenter}>
                  <Text style={styles.textValue}>{Item?.following_count}</Text>
                  <Text style={styles.textUnder}>following</Text>
                </View>
              </View>
              <View style={styles.buttons}>
                <Button
                  containerStyle={styles.leftButtonContainer}
                  buttonStyle={styles.leftButton}
                  titleStyle={styles.leftButtonText}
                  title="Follow"
                />
                <Button
                  buttonStyle={styles.rightButton}
                  title=""
                  icon={{
                    name: 'caret-down',
                    size: 15,
                    color: 'white',
                    type: 'ionicon',
                  }}
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.link}>
              <Text style={styles.website}>{Item?.links?.portfolio}</Text>
              <Text style={styles.website}>{Item?.links?.self}</Text>
              <Text style={styles.email}>{Item?.portfolio_url}</Text>
            </View>
          </View>
        </>
      )}
      <View>
        <View>
          <ButtonGroup
            buttons={buttons}
            containerStyle={styles.buttonGroupsContainer}
            buttonContainerStyle={styles.buttonContainer}
            selectedIndex={selectedIndex}
            onPress={value => {
              setSelectedIndex(value);
            }}
          />
        </View>
      </View>
      {isLoadingUserPhotos && <ActivityIndicator size="large" />}
      {!isLoadingUserPhotos && (
        <FlatList
          style={styles.photos}
          data={PhotosArr}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={3}
        />
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  textHeaders: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textCenter: {
    alignItems: 'center',
  },
  textValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#262627',
  },
  textUnder: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 15,
    marginTop: 18,
  },
  leftButtonContainer: {
    flex: 1,
  },
  leftButton: {
    marginHorizontal: 4,
    height: 35,
  },
  leftButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  rightButton: {
    height: 35,
  },
  link: {
    alignItems: 'flex-start',
    margin: 10,
    marginTop: 18,
  },
  email: {
    color: '#133566',
    fontSize: 16,
  },
  website: {
    fontSize: 16,
    color: '#262627',
  },
  mainImage: {
    height: 150,
    width: 150,
    margin: 1,
  },
  photos: {
    backgroundColor: '#fff',
  },
  buttonGroupsContainer: {
    borderWidth: 0,
    borderRadius: 0,
    margin: 0,
    padding: 0,
  },
  buttonContainer: {
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  headerButton: {
    margin: 12,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
