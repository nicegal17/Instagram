import {combineReducers} from 'redux';
import {photosReducer} from './slices/photosSlice';
import {userReducer} from './slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  photos: photosReducer,
});

export default rootReducer;
