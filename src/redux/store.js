import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React from 'react'
import ordersSlice from './ordersSlice';

const reducer = combineReducers({
    ordersSlice: ordersSlice.reducer,
 });

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware({
          serializableCheck: false,
       }),
 });

export default store;
