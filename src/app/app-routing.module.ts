import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BlogComponent } from './views/blog/blog.component';
import { AdminLoginComponent } from './views/admin-login/admin-login.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : LandingPageComponent },
  { path:'blog', component: BlogComponent },
  { path:'login', component: AdminLoginComponent },
  { path:'projects', component: ProjectsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
