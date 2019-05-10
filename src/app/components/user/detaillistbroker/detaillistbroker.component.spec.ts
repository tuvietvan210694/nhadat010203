import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillistbrokerComponent } from './detaillistbroker.component';

describe('DetaillistbrokerComponent', () => {
  let component: DetaillistbrokerComponent;
  let fixture: ComponentFixture<DetaillistbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillistbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillistbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
