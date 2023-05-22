import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import * as fa from '@fortawesome/free-solid-svg-icons';

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

  ngOnInit(): void {
    this.linkedIn = faLinkedin;
    this.github = faGithub;
    this.location = fa.faLocationDot;
    this.house = fa.faHouse;
    this.email = fa.faAt;
    this.age = fa.faCakeCandles;
    this.degree = fa.faGraduationCap;
  }
}
