import { combineReducers } from 'redux';
import fooReducer from '../../features/foo/redux/FooReducer';
import { FOO_REDUCER_NAME } from '../../features/foo/redux/FooActions';

const reducers = combineReducers({
  [FOO_REDUCER_NAME]: fooReducer,
});

export default reducers;
