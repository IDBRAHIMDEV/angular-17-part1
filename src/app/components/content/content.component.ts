import { Component } from '@angular/core';
import { ListProductsComponent } from '../list-products/list-products.component';
import { ListUsersComponent } from '../list-users/list-users.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ListProductsComponent, ListUsersComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
