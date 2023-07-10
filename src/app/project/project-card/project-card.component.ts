import { Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit{
  @Input() project: any;
  zoomIcon: any;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.zoomIcon = faMagnifyingGlassPlus;
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
}
