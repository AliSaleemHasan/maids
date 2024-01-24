import { createAction, props } from '@ngrx/store';
import { User } from '../../user';

export const loadUserSuccess = createAction(
  '[Home Component] get search results',
  props<{ user: User | null }>()
);
export const loadUserNotFound = createAction(
  '[Home Component] dispatch user not found'
);
