import { createSlice } from '@reduxjs/toolkit';
import { FooReducerState, setShowFooReducer } from './FooReducer';
import { updateShowFoo } from './FooOperations';

const FOO_REDUCER_NAME = 'foo';

const initialState: FooReducerState = {
  showFoo: false,
};

const fooSlice = createSlice({
  name: FOO_REDUCER_NAME,
  initialState,
  reducers: {
    setShowFoo: setShowFooReducer,
  },
  extraReducers: {
    [updateShowFoo.fulfilled]: setShowFooReducer,
  },
});

// Action creators are generated for each case reducer function
export const { setShowFoo } = fooSlice.actions;
export default fooSlice;
