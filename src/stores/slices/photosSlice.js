import {createSelector, createSlice} from '@reduxjs/toolkit';

import {MAX_PER_PAGE} from '../../constants';
import {fetchListPhotos, fetchPhoto} from '../middleware/photos';

const initialState = {
  isLoadingPhoto: false,
  isLoadingPhotos: false,
  photos: [],
  photo: null,
  page: 1,
  per_page: MAX_PER_PAGE,
  order_by: 'position',
  error: null,
};

const {reducer} = createSlice({
  name: 'photos',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchListPhotos.pending, state => {
      state.isLoadingPhotos = true;
    });
    builder.addCase(fetchListPhotos.fulfilled, (state, {payload}) => {
      state.isLoadingPhotos = false;
      state.photos = payload;
    });
    builder.addCase(fetchListPhotos.rejected, (state, action) => {
      state.isLoadingPhotos = false;
      state.error = action.error;
    });

    builder.addCase(fetchPhoto.pending, state => {
      state.isLoadingPhoto = true;
    });
    builder.addCase(fetchPhoto.fulfilled, (state, {payload}) => {
      state.isLoadingPhoto = false;
      state.photo = payload;
    });
    builder.addCase(fetchPhoto.rejected, (state, action) => {
      state.isLoadingPhoto = false;
      state.error = action.error;
    });
  },
});

const selectRoot = state => state.photos;

export const photosSelectors = {
  photos: createSelector(selectRoot, state => state.photos),
  photo: createSelector(selectRoot, state => state.photo),
  isLoadingPhoto: createSelector(selectRoot, state => state.isLoadingPhoto),
  isLoadingPhotos: createSelector(selectRoot, state => state.isLoadingPhotos),
};

export const photosReducer = reducer;
