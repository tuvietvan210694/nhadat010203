import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPublicSearchComponent } from './layout-public-search.component';

describe('LayoutPublicSearchComponent', () => {
  let component: LayoutPublicSearchComponent;
  let fixture: ComponentFixture<LayoutPublicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPublicSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPublicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
