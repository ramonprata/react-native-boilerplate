/**
 * Use this to setup FEATURE operations and dispatch actions
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { FooManager } from '../service/FooManager';

// TODO: see thunkAPI params: https://redux-toolkit.js.org/api/createAsyncThunk

const updateShowFooAsync = createAsyncThunk(
  'foo/updateShowFooAsync',
  async (showFoo: boolean, thunkAPI) => {
    // console.log('thunkAPI :>> ', thunkAPI);
    const fooManager = new FooManager();
    const response = await fooManager.getMydata(showFoo);
    return response;
  }
);

const updateShowFoo = {
  operation: updateShowFooAsync,
  fulfilled: updateShowFooAsync.fulfilled.toString(), // TODO: create a reusable function in utils to get status as strings
  pending: updateShowFooAsync.pending.toString(),
  rejected: updateShowFooAsync.rejected.toString(),
};

export { updateShowFoo };
