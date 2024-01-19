import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern('[0-9a-zA-Z ]*')]),
    password: new FormControl(null, Validators.required)
  })

  login() {
    console.log(this.loginForm)
  }

}
