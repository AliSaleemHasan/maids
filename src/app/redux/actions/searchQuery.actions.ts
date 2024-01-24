import { createAction, props } from '@ngrx/store';

export const updateSearchQuery = createAction(
  '[Header Component] Update Search Query',
  props<{ query: string }>()
);
