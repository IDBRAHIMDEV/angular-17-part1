import { Component } from '@angular/core';
import { TableCoursesComponent } from '../../components/table-courses/table-courses.component';
import { ListCoursesComponent } from '../../components/list-courses/list-courses.component';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TableCoursesComponent, ListCoursesComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  toggleForm = false

  listView = true 

  courses: Course[] = [
    {
      id: 1,
      title: 'Learn Angular 17',
      price: 349.3445,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/kHCQ5KxRfaEcsxZUNFiZ',
      content: 'Learn Angular 17 from scratch '
    },
    {
      id: 2,
      title: 'Learn Spring boot',
      price: 543.98756,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/4jgHzQESLa2F5uccFGc2',
      content: 'Learn Spring boot for developing the web app'
    },
    {
      id: 3,
      title: 'Learn React 18',
      price: 543.98756,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/ndgpEj1YRAqrlS0gNZBb',
      content: 'Learn React for Frontend app'
    }
  ]

  changeToggleForm() {
    this.toggleForm = !this.toggleForm
  }

  toggleView(status: boolean) {
    this.listView = status
  }

}
