import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { IResponse } from '../paginated-response';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink, CommonModule, LoadingComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  userId = -1;
  user$!: Observable<IResponse<User>>;
  constructor(private route: ActivatedRoute, private service: UserService) {
    this.userId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    this.user$ = this.service.getSingleUser(this.userId);
  }
}
