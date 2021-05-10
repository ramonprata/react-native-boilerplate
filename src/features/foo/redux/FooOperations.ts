/**
 * Use this to setup FEATURE operations and dispatch actions
 */

import { Dispatch } from 'redux';
import store from '../../../shared/store';
import { DefaultActionTypeThunk } from '../../../shared/types';
import { setFoo } from './FooActions';
import { FooManager } from '../service/FooManager';

// Redux-Thunk action
type SetFooAsyncThunkType = DefaultActionTypeThunk;

// using thunk
export const asyncActionThunk = (showFoo: boolean): SetFooAsyncThunkType => async (dispatch) => {
  const fooManger = new FooManager();
  const asyncResp = await fooManger.getMydata(showFoo);
  dispatch(setFoo(asyncResp));
};

// using store.dispatch
export const asyncActionStoreDispatch = async (showFoo: boolean): Promise<void> => {
  const fooManger = new FooManager();
  const asyncResp = await fooManger.getMydata(showFoo);
  store.dispatch(setFoo(asyncResp));
};

// getting dispatch from params
export const asyncActionDispatchParam = async (
  showFoo: boolean,
  dispatch: Dispatch
): Promise<void> => {
  const fooManger = new FooManager();
  const asyncResp = await fooManger.getMydata(showFoo);
  dispatch(setFoo(asyncResp));
};
