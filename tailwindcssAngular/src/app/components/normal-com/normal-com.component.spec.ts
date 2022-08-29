import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalComComponent } from './normal-com.component';

describe('NormalComComponent', () => {
  let component: NormalComComponent;
  let fixture: ComponentFixture<NormalComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
