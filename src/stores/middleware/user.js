import {createAsyncThunk} from '@reduxjs/toolkit';
import AppServices from '../../api/services';

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
