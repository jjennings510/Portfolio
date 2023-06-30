import { Component, OnInit } from '@angular/core';
import { ProfileLoaderService } from '../_services/profile-loader.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit{
  projects: any;

  constructor(private profileLoader: ProfileLoaderService){}
  ngOnInit(): void {
    this.projects = this.profileLoader.getProjects();
  }
}
