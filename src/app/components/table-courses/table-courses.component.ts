import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course';
import { CommonModule, NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [NgClass, NgStyle, CommonModule],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css'
})
export class TableCoursesComponent {

  myDate = new Date()
  
  @Input() dataCourses: Course[] = []

  @Output() deleteCourseFromChid = new EventEmitter()

  @Output() editCourseFromChild = new EventEmitter()

  @Output() statusCourseFromChild = new EventEmitter()
  
  wantRemoveCourse(id: number | string) {
    console.log('remove a course im a child')
    this.deleteCourseFromChid.emit(id)
  }

  changeStatusCourse(course: Course) {
    this.statusCourseFromChild.emit({id: course.id, status: course.enable})
  }

  editCourseEntire(course: Course) {
    this.editCourseFromChild.emit(course)
  }

}
