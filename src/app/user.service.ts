import { Injectable } from '@angular/core';
import { User } from './user';
import {
  HttpClient,
  HttpParams,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { IResponse, PaginatedResponse } from './paginated-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getUsers = (page: number) => {
    const params = new HttpParams().set('page', page.toString());
    return this.http.get<PaginatedResponse<User>>(this.url, {
      params,
    });
  };

  getSingleUser = (id: number) => {
    return this.http.get<IResponse<User>>(`${this.url}/${id}`);
  };
}
