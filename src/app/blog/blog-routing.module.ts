import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { ListArticleComponent } from './list-article/list-article.component';

const routes: Routes = [
  { 
    path: '', component: BlogComponent, children: [
      { path: '', component: ListArticleComponent },
      { path: 'create', component: CreateArticleComponent },
      { path: 'edit/:id', component: EditArticleComponent },
      { path: ':id', component: ShowArticleComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
