import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './pages/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, FormsModule, TodoComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Eurafric";
  courses: string[] = []
  image = "https://miro.medium.com/v2/resize:fit:720/format:webp/0*DTy8tlNHXGc0g4sB"

  show: boolean = true

  toggleDivision() {
    return this.show=!this.show
  }
}
