import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { ProfileLoaderService } from '../_services/profile-loader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  linkedIn: any;
  github: any;
  location: any;
  house: any;
  email: any;
  age: any;
  degree: any;
  model: any;

  constructor(private profileLoader: ProfileLoaderService) {}

  ngOnInit(): void {
    this.linkedIn = faLinkedin;
    this.github = faGithub;
    this.location = fa.faLocationDot;
    this.house = fa.faHouse;
    this.email = fa.faAt;
    this.age = fa.faCakeCandles;
    this.degree = fa.faGraduationCap;

    this.model = this.profileLoader.getAbout();
  }
}
