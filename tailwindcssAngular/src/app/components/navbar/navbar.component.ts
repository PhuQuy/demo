import { Component, OnInit } from '@angular/core';
import { ModalService } from '@modals/customize-modal/modal.service';
import { LoginComponent } from '@modals/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private modalService: ModalService<LoginComponent>) { }

  ngOnInit(): void {
  }

  /**
   * Opens login poup
   */
  public openLoginPoup(): void {
    console.log('aaa');
    
    this.modalService.open(LoginComponent);
  }
}
