import { configureStore } from '@reduxjs/toolkit';
import { fooSlice, FOO_REDUCER_NAME } from '../../features/foo/redux';

const reducer = {
  [FOO_REDUCER_NAME]: fooSlice.reducer,
};

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export default store;
