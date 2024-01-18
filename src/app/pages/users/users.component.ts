import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  userService = inject(UserService)

  users = signal<User[]>([])
  query = ''

  ngOnInit(): void {
      this.loadUsers()
  }

  loadUsers() {
    this.userService.getAll().subscribe({
      next: (res) => {
        console.log(res)
        this.users.set(res)
      },
      error: () => {}
    })
  }

  searchUser() {
    this.userService.search(this.query).subscribe({
      next: (res) => {
        let { items } = res
        this.users.set(items)
      }
    })
  }
}
