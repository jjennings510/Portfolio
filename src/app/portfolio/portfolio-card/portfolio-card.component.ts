import { Component, Input } from '@angular/core';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {
  @Input() project: Project | undefined;
  
}
