import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillistpostsComponent } from './detaillistposts.component';

describe('DetaillistpostsComponent', () => {
  let component: DetaillistpostsComponent;
  let fixture: ComponentFixture<DetaillistpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillistpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillistpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
