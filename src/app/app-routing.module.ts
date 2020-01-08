import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {BlogComponent} from './pages/blog/blog.component';
import {SandboxComponent} from './pages/sandbox/sandbox.component';
import {LearnComponent} from './pages/learn/learn.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'learn', component: LearnComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'projects' , component: ProjectsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'sandbox', component: SandboxComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
