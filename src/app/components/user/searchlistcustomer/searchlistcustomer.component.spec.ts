import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlistcustomerComponent } from './searchlistcustomer.component';

describe('SearchlistcustomerComponent', () => {
  let component: SearchlistcustomerComponent;
  let fixture: ComponentFixture<SearchlistcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlistcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlistcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
