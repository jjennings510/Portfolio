import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  emailIcon: any;
  phoneIcon: any;

  ngOnInit(): void {
    this.emailIcon = faEnvelope;
    this.phoneIcon = faPhone;
  }
}
