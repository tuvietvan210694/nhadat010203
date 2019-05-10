import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasspersonalComponent } from './changepasspersonal.component';

describe('ChangepasspersonalComponent', () => {
  let component: ChangepasspersonalComponent;
  let fixture: ComponentFixture<ChangepasspersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasspersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasspersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
