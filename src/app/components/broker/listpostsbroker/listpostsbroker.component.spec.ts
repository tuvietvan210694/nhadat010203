import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpostsbrokerComponent } from './listpostsbroker.component';

describe('ListpostsbrokerComponent', () => {
  let component: ListpostsbrokerComponent;
  let fixture: ComponentFixture<ListpostsbrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpostsbrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpostsbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
