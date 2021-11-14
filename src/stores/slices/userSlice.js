import {createSelector, createSlice} from '@reduxjs/toolkit';
import {
  fetchSelectedUser,
  fetchSelectedUserPhotos,
  fetchUserInfo,
  fetchUserPhotos,
} from '../middleware/user';

const initialState = {
  isLoadingUser: false,
  isLoadingUserPhotos: false,
  user: null,
  userPhotos: [],
  selectedUser: null,
  selectedUserPhotos: [],
};

const {reducer} = createSlice({
  name: 'user',
  initialState,
  extraReducers(builder) {
    // Get User Info
    builder.addCase(fetchUserInfo.pending, state => {
      state.isLoadingUser = true;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, {payload}) => {
      state.isLoadingUser = false;
      state.user = payload;
    });
    builder.addCase(fetchUserInfo.rejected, (state, action) => {
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
  isLoadingUser: createSelector(selectRoot, state => state.isLoadingUser),
  isLoadingUserPhotos: createSelector(
    selectRoot,
    state => state.isLoadingUserPhotos,
  ),
};

export const userReducer = reducer;
