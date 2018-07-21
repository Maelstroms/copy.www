import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BlogComponent } from './views/blog/blog.component';
import { AdminLoginComponent } from './views/admin-login/admin-login.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogPostsComponent } from './views/blog-posts/blog-posts.component';
import { BlogPostThumbnailComponent } from './views/blog-post-thumbnail/blog-post-thumbnail.component';

import { UserClientService } from './services/user/user-client.service';
import { SharedService } from './services/shared/shared.service' ;
import { AuthGuardService } from './services/auth-gaurd/auth-guard.service';
import { BlogService } from "./services/blog/blog.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    BlogComponent,
    AdminLoginComponent,
    ProjectsComponent,
    BlogPostsComponent,
    BlogPostThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserClientService,
    SharedService,
    AuthGuardService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
