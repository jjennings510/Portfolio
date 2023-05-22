import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: any = {
    languages: [
      { name: 'Java', percent: 70 },
      { name: 'C#', percent: 80 },
      { name: 'JavaScript/TypeScript', percent: 60 },
      { name: 'Python', percent: 50 },
      { name: 'SQL', percent: 75 },
    ],
    frameworks: [
      { name: 'Spring', percent: 80 },
      { name: 'Hibernate', percent: 70 },
      { name: 'ASP.NET Web API', percent: 80 },
      { name: 'Entity Framework Core', percent: 70 },
      { name: 'Angular', percent: 65 },
    ],
    tools: [
      { name: 'MySQL', percent: 75 },
      { name: 'PostgreSQL', percent: 75 },
      { name: 'Git', percent: 90 },
      { name: 'UiPath', percent: 90},
      { name: 'Blue Prism', percent: 90}
    ]
  };
}
