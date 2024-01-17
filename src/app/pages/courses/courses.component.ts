import { Component } from '@angular/core';
import { TableCoursesComponent } from '../../components/table-courses/table-courses.component';
import { ListCoursesComponent } from '../../components/list-courses/list-courses.component';
import { Course } from '../../models/course';
import { FormsModule } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TableCoursesComponent, ListCoursesComponent, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

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

  courses: Course[] = [
    {
      id: 1,
      title: 'Learn Angular 17',
      price: 349.3445,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/kHCQ5KxRfaEcsxZUNFiZ',
      content: 'Learn Angular 17 from scratch ',
      enable: true
    },
    {
      id: 2,
      title: 'Learn Spring boot',
      price: 543.98756,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/4jgHzQESLa2F5uccFGc2',
      content: 'Learn Spring boot for developing the web app',
      enable: false
    },
    {
      id: 3,
      title: 'Learn React 18',
      price: 543.98756,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/ndgpEj1YRAqrlS0gNZBb',
      content: 'Learn React for Frontend app',
      enable: true
    }
  ]

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
