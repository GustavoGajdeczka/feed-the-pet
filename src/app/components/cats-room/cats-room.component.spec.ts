import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsRoomComponent } from './cats-room.component';

describe('CatsRoomComponent', () => {
  let component: CatsRoomComponent;
  let fixture: ComponentFixture<CatsRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsRoomComponent]
    });
    fixture = TestBed.createComponent(CatsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
