import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  userId = -1;
  user!: User;
  constructor(private route: ActivatedRoute, private service: UserService) {
    this.userId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    this.service
      .getSingleUser(this.userId)
      .subscribe((res) => (this.user = res.data));
  }
}
