import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  {
    path : 'articles',
    component: ArticleListComponent
  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : '',
    component: ArticleListComponent
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
