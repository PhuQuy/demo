import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '@models/profile';

@Component({
  selector: 'app-normal-com',
  templateUrl: './normal-com.component.html',
  styleUrls: ['./normal-com.component.scss']
})
export class NormalComComponent implements OnInit {
  @Input()
  profile!: Profile;
  constructor() { }

  ngOnInit(): void {
  }

}
