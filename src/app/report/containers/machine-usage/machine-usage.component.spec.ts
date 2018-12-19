import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineUsageComponent } from './machine-usage.component';

describe('MachineUsageComponent', () => {
  let component: MachineUsageComponent;
  let fixture: ComponentFixture<MachineUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
