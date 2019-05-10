import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistcustomerComponent } from './editlistcustomer.component';

describe('EditlistcustomerComponent', () => {
  let component: EditlistcustomerComponent;
  let fixture: ComponentFixture<EditlistcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlistcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlistcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
