import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarbrokerComponent } from './leftbarbroker.component';

describe('LeftbarbrokerComponent', () => {
  let component: LeftbarbrokerComponent;
  let fixture: ComponentFixture<LeftbarbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftbarbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbarbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
