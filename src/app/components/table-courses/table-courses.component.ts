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
  
  wantRemoveCourse(id: number) {
    console.log('remove a course im a child')
    this.deleteCourseFromChid.emit(id)
  }

}
