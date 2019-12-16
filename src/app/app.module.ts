import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { CarouselComponent } from './pages/skills/carousel/carousel.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { UserCardComponent } from './pages/home/user-card/user-card.component';
import { ColoryDirective } from './colory.directive';
import { DelayDirective } from './delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    CarouselComponent,
    BlogComponent,
    PortfolioComponent,
    ProjectsComponent,
    SandboxComponent,
    UserCardComponent,
    ColoryDirective,
    DelayDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
