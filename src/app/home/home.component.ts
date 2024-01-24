import { Component, inject } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserItemComponent, NgFor, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userList!: User[];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems!: number;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.service.getUsers(this.currentPage).subscribe((res) => {
      this.userList = res.data;
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
