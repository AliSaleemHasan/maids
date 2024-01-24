import { createReducer, on } from '@ngrx/store';
import { loadUserNotFound, loadUserSuccess } from '../actions/user.actions';
export const initialState: any = null;

export const userReducer = createReducer<typeof initialState>(
  initialState,
  on(loadUserSuccess, (state, { user }) => user),
  on(loadUserNotFound, (state) => null)
);
