import { Component, inject } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserItemComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userList!: User[];

  constructor(private service: UserService) {
    this.service.getUsers().subscribe((res) => (this.userList = res.data));
  }
}
