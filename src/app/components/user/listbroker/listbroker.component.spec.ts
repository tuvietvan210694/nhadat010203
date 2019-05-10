import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbrokerComponent } from './listbroker.component';

describe('ListbrokerComponent', () => {
  let component: ListbrokerComponent;
  let fixture: ComponentFixture<ListbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
