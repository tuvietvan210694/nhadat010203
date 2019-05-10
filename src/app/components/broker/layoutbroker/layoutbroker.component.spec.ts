import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutbrokerComponent } from './layoutbroker.component';

describe('LayoutbrokerComponent', () => {
  let component: LayoutbrokerComponent;
  let fixture: ComponentFixture<LayoutbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
