import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearValidityCheckerComponent } from './year-validity-checker.component';

describe('YearValidityCheckerComponent', () => {
  let component: YearValidityCheckerComponent;
  let fixture: ComponentFixture<YearValidityCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearValidityCheckerComponent]
    });
    fixture = TestBed.createComponent(YearValidityCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
