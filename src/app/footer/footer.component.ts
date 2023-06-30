import { Component } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  emailIcon: any;
  phoneIcon: any;
  linkedIn: any;
  github: any;

  ngOnInit(): void {
    this.emailIcon = faEnvelope;
    this.phoneIcon = faPhone;
    this.linkedIn = faLinkedin;
    this.github = faGithub;
  }
}
