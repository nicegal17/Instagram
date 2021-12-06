import {createSelector, createSlice} from '@reduxjs/toolkit';
import {
  fetchSelectedUser,
  fetchSelectedUserPhotos,
  fetchMyProfile,
  fetchUserPhotos,
  fetchLikedPhotos,
} from '../middleware/user';

const initialState = {
  isLoadingUser: false,
  isLoadingUserPhotos: false,
  isLoadingLikedPhotos: false,
  user: null,
  userPhotos: [],
  selectedUser: null,
  selectedUserPhotos: [],
  likedPhotos: [],
};

const {reducer} = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Get my profile
    builder.addCase(fetchMyProfile.pending, state => {
      state.isLoadingUser = true;
    });
    builder.addCase(fetchMyProfile.fulfilled, (state, {payload}) => {
      state.isLoadingUser = false;
      state.user = payload;
    });
    builder.addCase(fetchMyProfile.rejected, (state, action) => {
      state.isLoadingUser = false;
      state.error = action.error;
    });

    // Get User Photos
    builder.addCase(fetchUserPhotos.pending, state => {
      state.isLoadingUserPhotos = true;
    });
    builder.addCase(fetchUserPhotos.fulfilled, (state, {payload}) => {
      state.isLoadingUserPhotos = false;
      state.userPhotos = payload;
    });
    builder.addCase(fetchUserPhotos.rejected, (state, action) => {
      state.isLoadingUserPhotos = false;
      state.error = action.error;
    });

    // Get Selected User Info
    builder.addCase(fetchSelectedUser.pending, state => {
      state.isLoadingUser = true;
    });
    builder.addCase(fetchSelectedUser.fulfilled, (state, {payload}) => {
      state.isLoadingUser = false;
      state.selectedUser = payload;
    });
    builder.addCase(fetchSelectedUser.rejected, (state, action) => {
      state.isLoadingUser = false;
      state.error = action.error;
    });

    // Get Selected User Photos
    builder.addCase(fetchSelectedUserPhotos.pending, state => {
      state.isLoadingUserPhotos = true;
    });
    builder.addCase(fetchSelectedUserPhotos.fulfilled, (state, {payload}) => {
      state.isLoadingUserPhotos = false;
      state.selectedUserPhotos = payload;
    });
    builder.addCase(fetchSelectedUserPhotos.rejected, (state, action) => {
      state.isLoadingUserPhotos = false;
      state.error = action.error;
    });

    // Get Liked Photos
    builder.addCase(fetchLikedPhotos.pending, state => {
      state.isLoadingLikedPhotos = true;
    });
    builder.addCase(fetchLikedPhotos.fulfilled, (state, {payload}) => {
      state.isLoadingLikedPhotos = false;
      state.likedPhotos = payload;
    });
    builder.addCase(fetchLikedPhotos.rejected, (state, action) => {
      state.isLoadingLikedPhotos = false;
      state.error = action.error;
    });
  },
});

const selectRoot = state => state.user;

export const userSelector = {
  user: createSelector(selectRoot, state => state.user),
  userPhotos: createSelector(selectRoot, state => state.userPhotos),
  selectedUser: createSelector(selectRoot, state => state.selectedUser),
  selectedUserPhotos: createSelector(
    selectRoot,
    state => state.selectedUserPhotos,
  ),
  likedPhotos: createSelector(selectRoot, state => state.likedPhotos),
  isLoadingUser: createSelector(selectRoot, state => state.isLoadingUser),
  isLoadingUserPhotos: createSelector(
    selectRoot,
    state => state.isLoadingUserPhotos,
  ),
  isLoadingLikedPhotos: createSelector(
    selectRoot,
    state => state.isLoadingLikedPhotos,
  ),
};

export const userReducer = reducer;
