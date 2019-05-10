import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistcustomerComponent } from './addlistcustomer.component';

describe('AddlistcustomerComponent', () => {
  let component: AddlistcustomerComponent;
  let fixture: ComponentFixture<AddlistcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
