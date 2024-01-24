import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { queryReducer } from './searchQuery.reducer';
import { userReducer } from './user.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  searchQuery: queryReducer,
  user: userReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
