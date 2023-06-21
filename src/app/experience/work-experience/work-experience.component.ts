import { Component, Input, TemplateRef } from '@angular/core';
import {
  BsModalRef,
  BsModalService,
  ModalBackdropComponent,
  ModalOptions,
} from 'ngx-bootstrap/modal';
import { WorkExperience } from 'src/app/_models/workExperience';
import { ExperienceModalComponent } from '../experience-modal/experience-modal.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  @Input() work: WorkExperience | undefined;
  modalRef?: BsModalRef;
  config = {
    animated: true,
  };
  constructor(private modalService: BsModalService) {}

  openModal() {
    if (this.work) {
      const options: ModalOptions = {
        initialState: {
          work: this.work,
        },
        class: 'modal-dialog-centered modal-lg',
      };
      this.modalRef = this.modalService.show(ExperienceModalComponent, options);
      console.log('Opening Modal');
      console.log(this.work);
    }
  }
}
