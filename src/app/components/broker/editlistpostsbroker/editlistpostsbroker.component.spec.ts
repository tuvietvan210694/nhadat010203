import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistpostsbrokerComponent } from './editlistpostsbroker.component';

describe('EditlistpostsbrokerComponent', () => {
  let component: EditlistpostsbrokerComponent;
  let fixture: ComponentFixture<EditlistpostsbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlistpostsbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlistpostsbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
