/**
 * Use this for general utility functions
 */

import { AsyncThunk } from '@reduxjs/toolkit';
import { IOperationReducer } from '../types';

export const getOperationStatus = <T extends AsyncThunk<any, any, any>>(
  asyncThunkFunction: T
): IOperationReducer<T> => ({
  run: asyncThunkFunction,
  fulfilled: asyncThunkFunction.fulfilled.toString(),
  pending: asyncThunkFunction.pending.toString(),
  rejected: asyncThunkFunction.rejected.toString(),
});
