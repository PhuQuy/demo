import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushComComponent } from './onpush-com.component';

describe('OnpushComComponent', () => {
  let component: OnpushComComponent;
  let fixture: ComponentFixture<OnpushComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
