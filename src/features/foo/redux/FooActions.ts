/**
 * Use this to setup FEATURE actions
 */

export const FOO_REDUCER_NAME = 'foo';
export const SET_SHOW_FOO = `${FOO_REDUCER_NAME}/SET_SHOW_FOO`;
export const SET_SHOW_FOO_ASYNC = `${FOO_REDUCER_NAME}/SET_SHOW_FOO_ASYNC`;

export interface SetShowFooAction {
  type: typeof SET_SHOW_FOO;
  payload: boolean;
}

export const setFoo = (showFoo: boolean): SetShowFooAction => ({
  type: SET_SHOW_FOO,
  payload: showFoo,
});
