import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlistbrokerComponent } from './searchlistbroker.component';

describe('SearchlistbrokerComponent', () => {
  let component: SearchlistbrokerComponent;
  let fixture: ComponentFixture<SearchlistbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlistbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlistbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
