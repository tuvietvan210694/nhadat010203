import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsearchcustomerbrokerComponent } from './listsearchcustomerbroker.component';

describe('ListsearchcustomerbrokerComponent', () => {
  let component: ListsearchcustomerbrokerComponent;
  let fixture: ComponentFixture<ListsearchcustomerbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsearchcustomerbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsearchcustomerbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
