import { Component, OnInit } from '@angular/core';
import { ProfileLoaderService } from '../_services/profile-loader.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  education: any;

  constructor(private profileLoader: ProfileLoaderService){}
  
  ngOnInit(): void {
    this.education = this.profileLoader.getEducation();  
  }

  
}
