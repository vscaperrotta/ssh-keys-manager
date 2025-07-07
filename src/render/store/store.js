import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import allReducer from '@store/reducers/index.js';

const rootReducer = combineReducers(allReducer);

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

