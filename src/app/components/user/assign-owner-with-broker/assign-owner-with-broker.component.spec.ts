import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignOwnerWithBrokerComponent } from './assign-owner-with-broker.component';

describe('AssignOwnerWithBrokerComponent', () => {
  let component: AssignOwnerWithBrokerComponent;
  let fixture: ComponentFixture<AssignOwnerWithBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignOwnerWithBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignOwnerWithBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
