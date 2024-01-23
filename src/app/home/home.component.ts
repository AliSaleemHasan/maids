import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
