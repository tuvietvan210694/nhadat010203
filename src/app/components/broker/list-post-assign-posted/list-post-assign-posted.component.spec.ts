import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostAssignPostedComponent } from './list-post-assign-posted.component';

describe('ListPostAssignPostedComponent', () => {
  let component: ListPostAssignPostedComponent;
  let fixture: ComponentFixture<ListPostAssignPostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostAssignPostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostAssignPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
