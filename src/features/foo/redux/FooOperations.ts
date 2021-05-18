/**
 * Use this to setup FEATURE operations and dispatch actions
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOperationStatus } from '../../../shared/utils';
import { FooManager } from '../service/FooManager';

const Manager = new FooManager();

const updateShowFooAsync = createAsyncThunk('foo/updateShowFooAsync', async (showFoo: boolean) => {
  const response = await FooManager.getMydata(showFoo);
  return response;
});

const loadDataOperation = createAsyncThunk('foo/loadDataOperation', async () => {
  const response = await Manager.getFooData();
  console.log('response :>> ', response);
  return response;
});

const updateShowFoo = getOperationStatus(updateShowFooAsync);
const loadFooData = getOperationStatus(loadDataOperation);

export { updateShowFoo, loadFooData };
