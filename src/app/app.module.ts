import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ExperienceComponent } from './experience/experience.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCardComponent } from './portfolio/portfolio-card/portfolio-card.component';
import { WorkExperienceComponent } from './experience/work-experience/work-experience.component';
import { ExperienceModalComponent } from './experience/experience-modal/experience-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EducationComponent } from './experience/education/education.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    PortfolioComponent,
    PortfolioCardComponent,
    WorkExperienceComponent,
    ExperienceModalComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    ProgressbarModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
