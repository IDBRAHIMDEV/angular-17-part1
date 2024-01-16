import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  title = "";
  todos = ['angular', 'javascript', 'angular']

  addTodo() {
    // this.todos.unshift(this.title)

    this.todos = [this.title, ...this.todos]
    this.title = ""
  }

  deleteTodo(i: number) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "delete it",
    }).then((result) => {
      if (result.isConfirmed) {

        this.todos.splice(i, 1)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          timer: 3000,
          timerProgressBar: true
        });
      }
    });

  }


  editTodo(todo: string) {
    this.title = todo
  }
}
