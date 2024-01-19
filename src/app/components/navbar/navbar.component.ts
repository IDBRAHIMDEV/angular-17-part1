import { AuthService } from './../../services/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserAuth } from '../../models/user-credencial';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  authService = inject(AuthService)
  router = inject(Router)
  authUser: UserAuth | null  = null

  
  ngOnInit(): void {
      this.authService.authSubject.subscribe(res => this.authUser = res)
  }

  logout() {
    this.authService.changeAuthSubject(null)
    localStorage.removeItem('app-token')
    this.router.navigate(['/auth/signin'])
  }


}
