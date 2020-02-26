import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popup';
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  public openModalWithComponent() {
    /* this is how we open a Modal Component from another component */
    this.bsModalRef = this.modalService.show(ModalComponent);
  }
}
