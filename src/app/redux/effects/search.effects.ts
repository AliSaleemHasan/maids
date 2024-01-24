import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { updateSearchQuery } from '../actions/searchQuery.actions';
import { UserService } from '../../user.service';
import { IResponse } from '../../paginated-response';
import { User } from '../../user';
import { Action } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { loadUserNotFound, loadUserSuccess } from '../actions/user.actions';
import { of } from 'rxjs';
interface UpdateSearchQueryAction extends Action {
  query: string;
}

@Injectable()
export class SearchEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ReturnType<typeof updateSearchQuery>>(updateSearchQuery),
      filter((action: UpdateSearchQueryAction) => action.query !== ''),
      switchMap((action: UpdateSearchQueryAction) =>
        this.service.getSingleUser(Number(action.query)).pipe(
          map((user: IResponse<User>) => loadUserSuccess({ user: user.data })),
          catchError((err) => of(loadUserNotFound()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: UserService) {}
}
