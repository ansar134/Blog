import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BlogitemComponent } from './components/blog/blogitem/blogitem.component';
import { BloglistviewComponent } from './components/blog/bloglistview/bloglistview.component';
import { BlogitemdetailComponent } from './components/blog/blogitemdetail/blogitemdetail.component';
import { BlogcontrollerComponent } from './components/blog/blogcontroller/blogcontroller.component';

const appRoutes: Routes=[
  { path: 'blogitemdetail', component: BlogitemdetailComponent },
  { path: 'blog', component: BlogcontrollerComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    BlogitemComponent,
    BloglistviewComponent,
    BlogitemdetailComponent,
    BlogcontrollerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
