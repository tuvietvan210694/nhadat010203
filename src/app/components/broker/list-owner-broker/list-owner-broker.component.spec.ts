import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOwnerBrokerComponent } from './list-owner-broker.component';

describe('ListOwnerBrokerComponent', () => {
  let component: ListOwnerBrokerComponent;
  let fixture: ComponentFixture<ListOwnerBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOwnerBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOwnerBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
