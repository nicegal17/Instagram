import React from 'react';
import {View, Text, StyleSheet, ActionSheetIOS} from 'react-native';
import {ListItem} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';

import UserAvatar from '../UserAvatar';

import LikesSVG from '../../assets/svg/likes.svg';
import CommentSVG from '../../assets/svg/comment.svg';
import ShareSVG from '../../assets/svg/share.svg';
import BookmarkSVG from '../../assets/svg/bookmark.svg';

const CardItem = ({
  userName,
  address,
  imageurl,
  userAvatar,
  likes,
  description,
  onUserPress,
}) => {
  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Cancel',
          'Delete',
          'Archive',
          'Hide like count',
          'Turn off commenting',
          'Edit',
          'Copy link',
          'Share to...',
          'Share',
        ],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light',
        tintColor: 'black',
        fontSize: 14,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 0) {
          setResult('🔮');
        }
      },
    );

  return (
    <View>
      <ListItem bottomDivider onPress={onUserPress}>
        <UserAvatar url={userAvatar} size={48} />
        <ListItem.Content>
          <ListItem.Title>{userName}</ListItem.Title>
          <ListItem.Subtitle>{address}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
          type="ionicon"
          name="ellipsis-horizontal"
          color="#262627"
          size={24}
          onPress={onPress}
        />
      </ListItem>
      <View>
        <FastImage
          source={{
            uri: imageurl,
            priority: FastImage.priority.normal,
          }}
          style={styles.mainImage}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.sharerContainer}>
        <View style={styles.sharerGroup}>
          <TouchableOpacity style={styles.sharerIcons}>
            <LikesSVG width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sharerIcons}>
            <CommentSVG width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sharerIcons}>
            <ShareSVG width={24} height={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <BookmarkSVG width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.texts}>
        <Text style={styles.likes}>{likes} Likes</Text>
        <View style={styles.userText}>
          <Text style={styles.userName}>
            {userName}{' '}
            <Text style={styles.caption} numberOfLines={3}>
              {description}
            </Text>
            <Text style={styles.hashtag}>#endregion</Text>
          </Text>
        </View>
        <Text style={styles.time}>10 MINUTES AGO</Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  mainImage: {
    height: 350,
    width: '100%',
  },
  sharerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  sharerGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sharerIcons: {
    marginLeft: 5,
    marginRight: 5,
  },
  likes: {
    fontSize: 16,
    fontWeight: '700',
    color: '#262627',
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#262627',
    marginRight: 6,
  },
  userText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  caption: {
    fontSize: 16,
    fontWeight: '400',
    color: '#262627',
  },
  time: {
    fontSize: 10,
    lineHeight: 21,
    marginTop: 4,
  },
  texts: {
    marginLeft: 20,
    marginRight: 20,
  },
  hashtag: {
    fontSize: 16,
    color: '#294B76',
  },
});
