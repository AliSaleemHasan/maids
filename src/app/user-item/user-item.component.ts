import { Component, Input } from '@angular/core';
import { User } from '../user';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent {
  @Input() user!: User;
}
