import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  title = "";
  todos = ['learn angular', 'javascript', 'typescript for oop']

  addTodo() {
    // this.todos.unshift(this.title)

    this.todos = [this.title, ...this.todos]
    this.title = ""
  }
}
