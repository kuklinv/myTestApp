import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { NgbdCarouselBasic } from './pages/learn/carousel/carousel.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { LearnComponent } from './pages/learn/learn.component';
import { WeatherComponent } from './pages/projects/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    NgbdCarouselBasic,
    BlogComponent,
    PortfolioComponent,
    ProjectsComponent,
    SandboxComponent,
    LearnComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [NgbdCarouselBasic],
  providers: [],
  bootstrap: [AppComponent, NgbdCarouselBasic]
})
export class AppModule { }
