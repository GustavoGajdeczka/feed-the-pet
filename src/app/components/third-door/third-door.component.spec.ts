import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdDoorComponent } from './third-door.component';

describe('ThirdDoorComponent', () => {
  let component: ThirdDoorComponent;
  let fixture: ComponentFixture<ThirdDoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdDoorComponent]
    });
    fixture = TestBed.createComponent(ThirdDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
