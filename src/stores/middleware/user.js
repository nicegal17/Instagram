import {createAsyncThunk} from '@reduxjs/toolkit';
import AppServices from '../../api/services';
import {updateAllPhotosByLiked} from '../slices/photosSlice';
import {fetchListPhotos} from './photos';

export const fetchMyProfile = createAsyncThunk('user/me', async () => {
  const response = await AppServices.fetchMyProfile();
  return response.data;
});

export const fetchUserInfo = createAsyncThunk('user/info', async username => {
  const response = await AppServices.fetchUserInfo(username);
  return response.data;
});

export const fetchUserPhotos = createAsyncThunk(
  'user/userPhotos',
  async username => {
    const response = await AppServices.fetchUserPhotos(username);
    return response.data;
  },
);

export const fetchSelectedUser = createAsyncThunk(
  'user/selectedUser',
  async username => {
    const response = await AppServices.fetchUserInfo(username);
    return response.data;
  },
);

export const fetchSelectedUserPhotos = createAsyncThunk(
  'user/selectedUserPhotos',
  async username => {
    const response = await AppServices.fetchUserPhotos(username);
    return response.data;
  },
);

export const fetchLikedPhotos = createAsyncThunk(
  'user/likes',
  async username => {
    const response = await AppServices.fetchLikedPhotos(username);
    return response.data;
  },
);

export const likePhoto = createAsyncThunk(
  'photos/like',
  async (id, {dispatch}) => {
    const response = await AppServices.likePhoto(id);
    // dispatch(fetchListPhotos());
    dispatch(updateAllPhotosByLiked(id));
    return response.data;
  },
);

export const unLikePhoto = createAsyncThunk(
  'photos/like',
  async (id, {dispatch}) => {
    const response = await AppServices.unLikePhoto(id);
    dispatch(fetchListPhotos());
    return response.data;
  },
);
