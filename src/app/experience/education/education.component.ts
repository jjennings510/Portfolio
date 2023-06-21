import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Education } from 'src/app/_models/education';
import { ExperienceModalComponent } from '../experience-modal/experience-modal.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input() education: Education | undefined;
  modalRef?: BsModalRef;
  config = {
    animated: true,
  };
  constructor(private modalService: BsModalService) {}

  openModal() {
    if (this.education) {
      const options: ModalOptions = {
        initialState: {
          education: this.education,
        },
        class: 'modal-dialog-centered modal-lg',
      };
      this.modalRef = this.modalService.show(ExperienceModalComponent, options);
      console.log('Opening Modal');
      console.log(this.education);
    }
  }
}
