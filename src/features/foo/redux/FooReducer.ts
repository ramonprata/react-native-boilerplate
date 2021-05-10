/**
 * Use this to setup FEATURE reducer
 */

import { PayloadAction } from '@reduxjs/toolkit';

export interface FooReducerState {
  showFoo: boolean;
}

export const setShowFooReducer = (state: FooReducerState, action: PayloadAction<boolean>) => {
  // redux toolkit comes with immer, in that case we can mutate state directly
  state.showFoo = action.payload;
};
