import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistbrokerComponent } from './addlistbroker.component';

describe('AddlistbrokerComponent', () => {
  let component: AddlistbrokerComponent;
  let fixture: ComponentFixture<AddlistbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
