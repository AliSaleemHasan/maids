import { createReducer, on } from '@ngrx/store';
import { updateSearchQuery } from '../actions/searchQuery.actions';
export const initialState = '';

export const queryReducer = createReducer(
  initialState,
  on(updateSearchQuery, (state, { query }) => query)
);
