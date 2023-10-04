import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
