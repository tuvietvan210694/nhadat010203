import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbaruserComponent } from './leftbaruser.component';

describe('LeftbaruserComponent', () => {
  let component: LeftbaruserComponent;
  let fixture: ComponentFixture<LeftbaruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftbaruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
