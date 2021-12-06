import {createAsyncThunk} from '@reduxjs/toolkit';
import AppServices from '../../api/services';

export const fetchListPhotos = createAsyncThunk('fetch/photos', async () => {
  const response = await AppServices.fetchAllPhotos();
  return response.data;
});

export const fetchPhoto = createAsyncThunk('photos/fetch', async id => {
  const response = await AppServices.fetchPhoto(id);
  return response.data;
});

export const fetchSearchPhotos = createAsyncThunk(
  'search/photos',
  async query => {
    const response = await AppServices.searchPhotos(query);
    return response.data;
  },
);
