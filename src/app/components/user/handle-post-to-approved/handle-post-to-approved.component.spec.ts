import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlePostToApprovedComponent } from './handle-post-to-approved.component';

describe('HandlePostToApprovedComponent', () => {
  let component: HandlePostToApprovedComponent;
  let fixture: ComponentFixture<HandlePostToApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlePostToApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlePostToApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
