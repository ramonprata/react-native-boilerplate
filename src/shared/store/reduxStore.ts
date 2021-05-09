import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fooReducer, FOO_REDUCER_NAME } from '../../features/foo/redux';

const reducers = combineReducers({
  [FOO_REDUCER_NAME]: fooReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export default store;
