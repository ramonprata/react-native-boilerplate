/**
 * Use this to setup FEATURE reducer
 */

// old way - start
import { SET_SHOW_FOO, SetShowFooAction } from './FooActions';
interface ReducerState {
  showFoo: boolean;
}
// type ReducerActions = SetShowFooAction | AnotherActionType;
type ReducerActions = SetShowFooAction;

const initialState: ReducerState = { showFoo: false };

export default (state = initialState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case SET_SHOW_FOO:
      return { ...state, showFoo: action.payload };

    default:
      return state;
  }
};
// old way - end
