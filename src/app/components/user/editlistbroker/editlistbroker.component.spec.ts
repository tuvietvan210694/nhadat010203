import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistbrokerComponent } from './editlistbroker.component';

describe('EditlistbrokerComponent', () => {
  let component: EditlistbrokerComponent;
  let fixture: ComponentFixture<EditlistbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlistbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlistbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
