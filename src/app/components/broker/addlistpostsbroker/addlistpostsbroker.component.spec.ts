import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistpostsbrokerComponent } from './addlistpostsbroker.component';

describe('AddlistpostsbrokerComponent', () => {
  let component: AddlistpostsbrokerComponent;
  let fixture: ComponentFixture<AddlistpostsbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistpostsbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistpostsbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
