import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   // constructor(private http: HttpClient) {}

   apiUrl = "http://localhost:3001/courses"
   http = inject(HttpClient)
 
   getAll(): Observable<Course[]> {
     return this.http.get<Course[]>(this.apiUrl)
   }
 
   save(course: Course): Observable<Course> {
     return this.http.post<Course>(this.apiUrl, course)
   }
 
   getOne(id: number | string): Observable<Course> {
     return this.http.get<Course>(`${this.apiUrl}/${id}`)
   }
 
   update(id: number | string, course: Course): Observable<Course> {
     return this.http.put<Course>(`${this.apiUrl}/${id}`, course)
   }
 
   partialUpdate(id: number | string, data: CourseDto): Observable<Course> {
     return this.http.patch<Course>(`${this.apiUrl}/${id}`, data)
   }
 
   destroy(id: number | string): Observable<null> {
     return this.http.delete<null>(`${this.apiUrl}/${id}`)
   }
}
