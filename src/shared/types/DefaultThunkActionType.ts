import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/reduxStore';

export type DefaultActionTypeThunk = ThunkAction<void, RootState, unknown, AnyAction>;
