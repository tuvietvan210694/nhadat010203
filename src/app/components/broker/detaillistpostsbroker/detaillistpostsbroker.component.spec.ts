import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillistpostsbrokerComponent } from './detaillistpostsbroker.component';

describe('DetaillistpostsbrokerComponent', () => {
  let component: DetaillistpostsbrokerComponent;
  let fixture: ComponentFixture<DetaillistpostsbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillistpostsbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillistpostsbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
