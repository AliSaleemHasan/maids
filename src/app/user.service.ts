import { Injectable } from '@angular/core';
import { User } from './user';
import {
  HttpClient,
  HttpParams,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { PaginatedResponse } from './paginated-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}
  getUsers = () => {
    return this.http.get<PaginatedResponse<User>>(this.url, {
      params: {
        page: 1,
      },
    });
  };
}
