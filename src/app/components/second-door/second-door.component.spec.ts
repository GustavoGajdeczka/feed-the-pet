import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDoorComponent } from './second-door.component';

describe('SecondDoorComponent', () => {
  let component: SecondDoorComponent;
  let fixture: ComponentFixture<SecondDoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondDoorComponent]
    });
    fixture = TestBed.createComponent(SecondDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
