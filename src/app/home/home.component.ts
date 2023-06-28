import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  linkedIn: any;
  github: any;
  

  constructor() {}

  ngOnInit(): void {
    this.linkedIn = faLinkedin;
    this.github = faGithub;
  }
}
