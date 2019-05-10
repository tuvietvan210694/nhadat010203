import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcustomerbrokerComponent } from './listcustomerbroker.component';

describe('ListcustomerbrokerComponent', () => {
  let component: ListcustomerbrokerComponent;
  let fixture: ComponentFixture<ListcustomerbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcustomerbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcustomerbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
