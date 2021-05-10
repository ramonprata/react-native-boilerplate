/**
 * Use this to setup FEATURE operations and dispatch actions
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOperationStatus } from '../../../shared/utils';
import { FooManager } from '../service/FooManager';

export const updateShowFooAsync = createAsyncThunk(
  'foo/updateShowFooAsync',
  async (showFoo: boolean) => {
    const response = await FooManager.getMydata(showFoo);
    return response;
  }
);

const updateShowFoo = getOperationStatus(updateShowFooAsync);

export { updateShowFoo };
