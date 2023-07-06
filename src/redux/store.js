import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React from 'react'
import ordersSlice from './ordersSlice';
import globalConfigSlice from './globalConfigSlice';

const reducer = combineReducers({
    ordersSlice: ordersSlice.reducer,
    globalConfigSlice: globalConfigSlice.reducer,
 });

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware({
          serializableCheck: false,
       }),
 });

export default store;
