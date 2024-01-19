import { Component, OnInit, inject, signal } from '@angular/core';
import { TableCoursesComponent } from '../../components/table-courses/table-courses.component';
import { ListCoursesComponent } from '../../components/list-courses/list-courses.component';
import { Course } from '../../models/course';
import { FormsModule, NgForm } from '@angular/forms';

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
  text = signal('')
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

  info(data: any) {
    console.log(data)
  }

  submitForm(data: any) {
    console.log(data)
  }

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
    
    this.courseService.destroy(id).subscribe({
      next: res => {
        this.courses = this.courses.filter(course => course.id !== id)
      },
      error: err => console.log(err)
    })
    

  }

  saveCourse(form: NgForm) {

    let { value, invalid } = form

    if(invalid) {
      return
    }

    this.courseService.save(value).subscribe({
      next: () => this.loadCourses(),
      error: err => console.log(err)
    })
    // this.courses = [newCourse, ...this.courses]
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

    let { id } = this.courseForm

    if(id) {    
      this.courseService.update(id, this.courseForm).subscribe({
        next: () => {
          this.initCourse()
          this.editMode = false
          this.toggleForm = false
        },
        error: () => {}
      })
    }

  }

  enableOrDisableCourse(data: {id: number | string, status: boolean}) {


    if(!confirm('update this course ?')) {
      return
    }

    let { id, status } = data
   
    this.courseService.partialUpdate(id, {enable: status}).subscribe({
      next: () => {
        this.courses = this.courses.map(course => {
          if(course.id === data.id) {
            return {
              ...course,
              enable: !data.status
            }
          }
          return course
        })
      },
      error: err => console.log(err)
    })

   
  }

}
