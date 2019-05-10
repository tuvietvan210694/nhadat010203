import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillistcustomerbrokerComponent } from './detaillistcustomerbroker.component';

describe('DetaillistcustomerbrokerComponent', () => {
  let component: DetaillistcustomerbrokerComponent;
  let fixture: ComponentFixture<DetaillistcustomerbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillistcustomerbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillistcustomerbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
