import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSearchQuery } from '../redux/actions/searchQuery.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private store: Store<{ query: string }>) {}

  setNewQuery(element: Event) {
    let query = (element.target as HTMLInputElement)?.value as string;
    this.store.dispatch(updateSearchQuery({ query }));
  }
}
