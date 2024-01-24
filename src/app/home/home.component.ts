import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { CommonModule, NgFor } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { PaginatedResponse } from '../paginated-response';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UserItemComponent,
    NgFor,
    PaginationComponent,
    CommonModule,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users$!: Observable<PaginatedResponse<User>>;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems!: number;

  searchedUser$!: Observable<User>;
  searchQuery$!: Observable<string>;

  constructor(
    private service: UserService,
    private store: Store<{ searchQuery: string; user: User }>
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.searchedUser$ = this.store.select((state) => state.user);
    this.searchQuery$ = this.store.select((state) => state.searchQuery);
  }

  fetchData(): void {
    this.users$ = this.service.getUsers(this.currentPage);
    this.users$.subscribe((res) => {
      this.currentPage = res.page;
      this.itemsPerPage = res.per_page;
      this.totalItems = res.total;
    });
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }
}
