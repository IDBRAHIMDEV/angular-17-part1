import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserCredencial } from '../../models/user-credencial'; 
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(AuthService)
  router = inject(Router)

  loginForm = new FormGroup({
    username: new UntypedFormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern('[0-9a-zA-Z ]*')]),
    password: new UntypedFormControl(null, Validators.required)
  })

  login() {
    let credencial: UserCredencial = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.authService.signIn(credencial).subscribe({
      next: (response) => {
          localStorage.setItem('app-token', response.token)
          this.authService.changeAuthSubject(this.authService.payload())
          this.router.navigate(['/home'])
      }
    })
  }

}
