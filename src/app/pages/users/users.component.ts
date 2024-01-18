import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  userService = inject(UserService)

  users = signal<User[]>([])

  ngOnInit(): void {
      this.loadUsers()
  }

  loadUsers() {
    this.userService.getAll().subscribe({
      next: (res) => this.users.set(res),
      error: () => {}
    })
  }
}
