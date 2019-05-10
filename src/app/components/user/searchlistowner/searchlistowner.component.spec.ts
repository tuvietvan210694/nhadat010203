import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlistownerComponent } from './searchlistowner.component';

describe('SearchlistownerComponent', () => {
  let component: SearchlistownerComponent;
  let fixture: ComponentFixture<SearchlistownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlistownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlistownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
