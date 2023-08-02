import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLockComponent } from './number-lock.component';

describe('NumberLockComponent', () => {
  let component: NumberLockComponent;
  let fixture: ComponentFixture<NumberLockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberLockComponent]
    });
    fixture = TestBed.createComponent(NumberLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
