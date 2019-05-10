import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListCustomerSearchComponent } from './detail-list-customer-search.component';

describe('DetailListCustomerSearchComponent', () => {
  let component: DetailListCustomerSearchComponent;
  let fixture: ComponentFixture<DetailListCustomerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailListCustomerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListCustomerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
