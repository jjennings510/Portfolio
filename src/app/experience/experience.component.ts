import { Component, OnInit } from '@angular/core';
import { ProfileLoaderService } from '../_services/profile-loader.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit{
  workExperience: any;
  
  constructor(private profileLoader: ProfileLoaderService){}

  ngOnInit(): void {
    this.workExperience = this.profileLoader.getWorkExperience();
  }

  toggleDetails(work: any) {
    work.displayDetails = !work.displayDetails;
  }
}
