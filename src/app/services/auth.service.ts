import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserAuth, UserCredencial } from '../models/user-credencial';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http =  inject(HttpClient)
  apiUrl = "https://dummyjson.com/auth/login"

  authSubject = new BehaviorSubject(this.isAuthenticated())

  changeAuthSubject(newStatus: any) {
    this.authSubject.next(newStatus)
  }

  signIn(credencial: UserCredencial): Observable<UserAuth> {
    return this.http.post<UserAuth>(this.apiUrl, credencial)
  }

  isAuthenticated() {
    return this.payload()
  }

  payload() {
    let token = localStorage.getItem('app-token')

    let payload = null
    if(!!token) {
      console.log(token)
      payload = JSON.parse(atob(token.split('.')[1]))
      console.log(token, payload)
      return payload
    }

    return null
  }
}
