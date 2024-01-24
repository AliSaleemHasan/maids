import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { CommonModule, NgFor } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { PaginatedResponse } from '../paginated-response';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserItemComponent, NgFor, PaginationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users$!: Observable<PaginatedResponse<User>>;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems!: number;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.fetchData();
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
