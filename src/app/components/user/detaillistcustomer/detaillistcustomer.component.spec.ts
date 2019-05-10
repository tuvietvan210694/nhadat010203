import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillistcustomerComponent } from './detaillistcustomer.component';

describe('DetaillistcustomerComponent', () => {
  let component: DetaillistcustomerComponent;
  let fixture: ComponentFixture<DetaillistcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillistcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillistcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
