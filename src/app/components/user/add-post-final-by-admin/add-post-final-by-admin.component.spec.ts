import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostFinalByAdminComponent } from './add-post-final-by-admin.component';

describe('AddPostFinalByAdminComponent', () => {
  let component: AddPostFinalByAdminComponent;
  let fixture: ComponentFixture<AddPostFinalByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostFinalByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostFinalByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
