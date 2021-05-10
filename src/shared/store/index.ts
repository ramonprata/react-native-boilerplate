import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reduxStore';

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;
