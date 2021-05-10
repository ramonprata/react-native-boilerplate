/**
 * Use this to setup FEATURE operations and dispatch actions
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { FooManager } from '../service/FooManager';

// TODO: see thunkAPI params: https://redux-toolkit.js.org/api/createAsyncThunk

const setShowFooAsync = createAsyncThunk(
  'foo/setShowFooAsync',
  async (showFoo: boolean, thunkAPI) => {
    console.log('thunkAPI :>> ', thunkAPI);
    const fooManager = new FooManager();
    const response = await fooManager.getMydata(showFoo);
    return response;
  },
);

export { setShowFooAsync };
