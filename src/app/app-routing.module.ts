import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'home',
    title:'Home',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'skills',
    title:'Skills',
    component:SkillsComponent
  },
  {
    path:'blog',
    title:'Blog',
    component:BlogComponent
  },
  {
    path:'about',
    title:'About',
    component:AboutComponent
  },
  {
    path:'projects',
    title:'Projects',
    component:ProjectsComponent
  },
  {
    path:'contact',
    title:'Contact',
    component:ContactComponent
  },
  {
    path:'**',
    title:'Error Page',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
