import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../user';
import { Observable } from 'rxjs';
import { UserItemComponent } from '../user-item/user-item.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [UserItemComponent, NgIf, AsyncPipe],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css',
})
export class UserSearchComponent {
  searchedUser$!: Observable<User>;
  searchQuery$!: Observable<string>;

  constructor(private store: Store<{ searchQuery: string; user: User }>) {}

  ngOnInit(): void {
    this.searchedUser$ = this.store.select((state) => state.user);
    this.searchQuery$ = this.store.select((state) => state.searchQuery);
  }
}
