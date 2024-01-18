import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   // constructor(private http: HttpClient) {}

   apiUrl = "https://api.github.com/users"
   http = inject(HttpClient)
 
   getAll(): Observable<User[]> {
     return this.http.get<User[]>(this.apiUrl)
   }
 
   save(user: User): Observable<User> {
     return this.http.post<User>(this.apiUrl, user)
   }
 
   getOne(id: number | string): Observable<User> {
     return this.http.get<User>(`${this.apiUrl}/${id}`)
   }
 
   update(id: number | string, User: User): Observable<User> {
     return this.http.put<User>(`${this.apiUrl}/${id}`, User)
   }
 
   destroy(id: number | string): Observable<null> {
     return this.http.delete<null>(`${this.apiUrl}/${id}`)
   }
}
