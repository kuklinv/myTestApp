import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// import {ReflectiveInjector, Injector} from '@angular/core';
//
// const injector = ReflectiveInjector.resolveAndCreate([{provide: UserService, useClass: UserService}]);
// const UserService = injector.get(UserService);

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {CarouselComponent} from './pages/skills/carousel/carousel.component';
import {BlogComponent} from './blog/blog.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {SandboxComponent} from './pages/sandbox/sandbox.component';
import {UserCardComponent} from './pages/home/user-card/user-card.component';

import {ColoryDirective} from './directives/colory.directive';
import {DelayDirective} from './directives/delay.directive';

import {UserService} from './services/user.service';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: UserService, useClass: UserService} // короткая запись просто  UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
