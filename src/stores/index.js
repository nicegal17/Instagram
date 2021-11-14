import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  },
  rootReducer,
);

const setupReduxFlipper = middlewares => {
  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  return middlewares;
};

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return setupReduxFlipper([
      ...getDefaultMiddleware({
        serializableCheck: false,
      }).concat(),
    ]);
  },
});

const persistor = persistStore(store);
export {store, persistor};
