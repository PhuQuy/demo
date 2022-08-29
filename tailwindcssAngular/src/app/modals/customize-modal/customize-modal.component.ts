import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-customize-modal',
  templateUrl: './customize-modal.component.html',
  styleUrls: ['./customize-modal.component.scss']
})
export class CustomizeModalComponent<T> {

  display = true;

  constructor(private modalService: ModalService<T>) { }

  async close(): Promise<void> {
    this.display = false;

    setTimeout(async () => {
      await this.modalService.close();
    }, 0);
  }

}
