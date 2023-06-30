import { Component, OnInit } from '@angular/core';
import { ProfileLoaderService } from '../_services/profile-loader.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor(private profileLoader: ProfileLoaderService) {}
  ngOnInit(): void {
    this.skills = this.profileLoader.getSkills();
  }
}
