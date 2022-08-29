import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Profile } from '@models/profile';

@Component({
  selector: 'app-onpush-com',
  templateUrl: './onpush-com.component.html',
  styleUrls: ['./onpush-com.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComComponent implements OnInit {
  @Input()
  profile!: Profile;
  constructor() { }

  ngOnInit(): void {
  }

}
