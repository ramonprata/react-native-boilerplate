/**
 * Use this to setup FEATURE reducer
 */

import { SET_SHOW_FOO, SetShowFooAction } from './FooActions';

export interface FooReducerState {
  showFoo: boolean;
}

type ReducerActions = SetShowFooAction;

const initialState: FooReducerState = { showFoo: false };

export default (state = initialState, action: ReducerActions): FooReducerState => {
  switch (action.type) {
    case SET_SHOW_FOO:
      return { ...state, showFoo: action.payload };

    default:
      return state;
  }
};
