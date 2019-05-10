import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostFinalByAdminOldCustomerComponent } from './add-post-final-by-admin-old-customer.component';

describe('AddPostFinalByAdminOldCustomerComponent', () => {
  let component: AddPostFinalByAdminOldCustomerComponent;
  let fixture: ComponentFixture<AddPostFinalByAdminOldCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostFinalByAdminOldCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostFinalByAdminOldCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
