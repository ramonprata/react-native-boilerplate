/**
 * Use this for general utility functions
 */

import { AsyncThunk } from '@reduxjs/toolkit';
import { OperationReducer } from '../types';

export const getOperationStatus = <T extends AsyncThunk<any, any, any>>(
  asyncThunkFunction: T
): OperationReducer<T> => ({
  operation: asyncThunkFunction,
  fulfilled: asyncThunkFunction.fulfilled.toString(),
  pending: asyncThunkFunction.pending.toString(),
  rejected: asyncThunkFunction.rejected.toString(),
});
