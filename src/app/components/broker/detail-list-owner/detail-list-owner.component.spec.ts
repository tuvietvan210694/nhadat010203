import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListOwnerComponent } from './detail-list-owner.component';

describe('DetailListOwnerComponent', () => {
  let component: DetailListOwnerComponent;
  let fixture: ComponentFixture<DetailListOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailListOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
