/**
 * Use this to setup FEATURE operations and dispatch actions
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOperationStatus } from '../../../shared/utils';
import { FooManager } from '../service/FooManager';

const updateShowFooAsync = createAsyncThunk('foo/updateShowFooAsync', async (showFoo: boolean) => {
  const response = await FooManager.getMydata(showFoo);
  return response;
});

const loadDataOperation = createAsyncThunk('foo/loadDataOperation', async () => {
  const manager = new FooManager();
  const response = await manager.getFooData();
  return response;
});

const updateShowFoo = getOperationStatus(updateShowFooAsync);
const loadFooData = getOperationStatus(loadDataOperation);

export { updateShowFoo, loadFooData };
