import { FooReducerState, setShowFooReducer } from './FooReducer';
import { createSlice } from '@reduxjs/toolkit';
import { setShowFooAsync } from './FooOperations';

export const FOO_REDUCER_NAME = 'foo';

const initialState: FooReducerState = { showFoo: false };

const setShowFooSuccess = setShowFooAsync.fulfilled.toString();

const fooSlice = createSlice({
  name: FOO_REDUCER_NAME,
  initialState,
  reducers: {
    setShowFoo: setShowFooReducer,
  },
  extraReducers: {
    [setShowFooSuccess]: (state, action) => {
      state.showFoo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowFoo } = fooSlice.actions;
export default fooSlice;
