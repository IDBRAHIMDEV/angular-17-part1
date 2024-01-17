import { Component, OnInit, inject } from '@angular/core';
import { TableCoursesComponent } from '../../components/table-courses/table-courses.component';
import { ListCoursesComponent } from '../../components/list-courses/list-courses.component';
import { Course } from '../../models/course';
import { FormsModule } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TableCoursesComponent, ListCoursesComponent, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  ngOnInit(): void {
      this.loadCourses()
  }

  courseService = inject(CourseService)

  courseForm: Course = {
    title: '',
    image: '',
    price: 0,
    content: '',
    enable: true
  } 

  editMode = false
  toggleForm = false

  listView = true 

  courses: Course[] = []

  loadCourses() {
    this.courseService.getAll().subscribe({
      next: (response) => { this.courses = response },
      error: (error) => { console.log(error) },
      complete: () => { console.log('flux is completed') }
    })
  }

  changeToggleForm() {
    this.toggleForm = !this.toggleForm
    this.initCourse()
    this.editMode = false
  }

  toggleView(status: boolean) {
    this.listView = status
  }

  deleteCourseFromParent(id: number) {
    console.log('i m a parent', id)
    this.courses = this.courses.filter(course => course.id !== id)
  }

  saveCourse() {
    
    let newCourse: Course = {
      ...this.courseForm,
      id: uuidv4()
    }
    this.courses = [newCourse, ...this.courses]
    this.initCourse()
    this.toggleForm = false
  }

  initCourse() {
  
    this.courseForm = {
      title: '',
      image: '',
      price: 0,
      content: '',
      enable: true
    }
  }

  editCourse(course: Course) {
    this.courseForm = course
    this.editMode = true
    this.toggleForm = true
  }

  updateCourse() {
    this.initCourse()
    this.editMode = false
    this.toggleForm = false
  }

  enableOrDisableCourse(data: {id: number | string, status: boolean}) {
    this.courses = this.courses.map(course => {
      if(course.id === data.id) {
        return {
          ...course,
          enable: !data.status
        }
      }
      return course
    })
  }

}
