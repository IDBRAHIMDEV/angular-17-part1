import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css'
})
export class TableCoursesComponent {
  
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
