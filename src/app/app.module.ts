import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  NgbCarouselModule,
  NgbModalModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ExperienceComponent } from './experience/experience.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './project/project.component';
import { ProjectCardComponent } from './project/project-card/project-card.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectComponent,
    ProjectCardComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    ImageCarouselComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ProgressbarModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    TimelineModule,
    CardModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbModalModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }], 
      {
        anchorScrolling: 'enabled',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
