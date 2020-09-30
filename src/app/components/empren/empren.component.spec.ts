import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprenComponent } from './empren.component';

describe('EmprenComponent', () => {
  let component: EmprenComponent;
  let fixture: ComponentFixture<EmprenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
