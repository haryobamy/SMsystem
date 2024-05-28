import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice/slice';

export const reducer = combineReducers({
  auth: authSlice,
  //   [apiReducerPath]: apiReducer,
});
