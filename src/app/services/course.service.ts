import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';
import { CourseDto } from '../models/course-dto';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

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
}
