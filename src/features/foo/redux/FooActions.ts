/**
 * Use this to setup FEATURE actions
 */

// old way - start
export const FOO_REDUCER_NAME = 'foo';
export const SET_SHOW_FOO = `${FOO_REDUCER_NAME}/SET_SHOW_FOO`;

export interface SetShowFooAction {
  type: typeof SET_SHOW_FOO;
  payload: boolean;
}

export const setFoo = (showFoo: boolean): SetShowFooAction => {
  return { type: SET_SHOW_FOO, payload: showFoo };
};
// old way - end
