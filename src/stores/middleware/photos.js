import {createAsyncThunk} from '@reduxjs/toolkit';
import AppServices from '../../api/services';

export const fetchListPhotos = createAsyncThunk('photos/list', async () => {
  const response = await AppServices.fetchAllPhotos();
  return response.data;
});
