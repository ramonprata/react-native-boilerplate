import { configureStore } from '@reduxjs/toolkit';
import { fooSlice } from '../../features/foo/redux';

const reducer = {
  [fooSlice.name]: fooSlice.reducer,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
