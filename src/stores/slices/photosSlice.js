import {createSelector, createSlice} from '@reduxjs/toolkit';

import {MAX_PER_PAGE} from '../../constants';
import {
  fetchListPhotos,
  fetchPhoto,
  fetchSearchPhotos,
} from '../middleware/photos';

const initialState = {
  isLoadingPhoto: false,
  isLoadingPhotos: false,
  isLoadingSearchedPhotos: false,
  photos: [],
  photo: null,
  page: 1,
  per_page: MAX_PER_PAGE,
  order_by: 'position',
  error: null,
  searchedPhotos: [],
};

const {reducer, actions} = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    updateAllPhotosByLiked(state, {payload}) {
      let allPhotos = [...state.photos];
      let allLikedPhotos = [...state.likedPhotos];

      allPhotos = allPhotos.map(photo => {
        if (photo.id === payload) {
          allLikedPhotos.push(photo);
          return {
            ...photo,
            liked_by_user: true,
          };
        }

        return {
          ...photo,
        };
      });

      state.photos = allPhotos;
      state.likedPhotos = allLikedPhotos;
    },
  },
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

    // search
    builder.addCase(fetchSearchPhotos.pending, state => {
      state.isLoadingSearchedPhotos = true;
    });
    builder.addCase(fetchSearchPhotos.fulfilled, (state, {payload}) => {
      state.isLoadingSearchedPhotos = false;
      state.searchedPhotos = payload.results;
    });
    builder.addCase(fetchSearchPhotos.rejected, (state, action) => {
      state.isLoadingSearchedPhotos = false;
      state.error = action.error;
    });
  },
});

const selectRoot = state => state.photos;

export const photosSelectors = {
  photos: createSelector(selectRoot, state => state.photos),
  photo: createSelector(selectRoot, state => state.photo),
  searchedPhotos: createSelector(selectRoot, state => state.searchedPhotos),
  isLoadingPhoto: createSelector(selectRoot, state => state.isLoadingPhoto),
  isLoadingPhotos: createSelector(selectRoot, state => state.isLoadingPhotos),
  isLoadingSearchedPhotos: createSelector(
    selectRoot,
    state => state.isLoadingSearchedPhotos,
  ),
};

export const {updateAllPhotosByLiked} = actions;

export const photosReducer = reducer;
