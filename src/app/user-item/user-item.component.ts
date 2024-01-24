import { Component, Input } from '@angular/core';
import { User } from '../user';
import { RouterLink } from '@angular/router';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ItemHighlightDirective } from '../item-highlight.directive';
@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, ItemHighlightDirective, NgIf],

  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent {
  @Input() user!: User | null;
}
