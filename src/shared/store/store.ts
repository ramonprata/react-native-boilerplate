import { combineReducers, createStore } from 'redux';

import { fooReducer, FOO_REDUCER_NAME } from '../../features/foo/redux';

const reducers = combineReducers({
  [FOO_REDUCER_NAME]: fooReducer,
});

const store = createStore(reducers);

export default store;
