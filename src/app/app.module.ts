import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ArticleListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
