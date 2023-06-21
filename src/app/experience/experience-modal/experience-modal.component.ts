import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Education } from 'src/app/_models/education';
import { WorkExperience } from 'src/app/_models/workExperience';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.css'],
})
export class ExperienceModalComponent implements OnInit {
  work?: WorkExperience;
  education?: Education;
  
  ngOnInit(): void {
    console.log("Inside modal component")
    console.log(this.work);
  }
 
  constructor(public bsModalRef: BsModalRef) {}

  
}
