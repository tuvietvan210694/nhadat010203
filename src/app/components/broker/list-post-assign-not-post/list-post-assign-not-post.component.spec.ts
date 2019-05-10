import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostAssignNotPostComponent } from './list-post-assign-not-post.component';

describe('ListPostAssignNotPostComponent', () => {
  let component: ListPostAssignNotPostComponent;
  let fixture: ComponentFixture<ListPostAssignNotPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostAssignNotPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostAssignNotPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
