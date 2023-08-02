import { Component, EventEmitter, Output } from '@angular/core';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent {
  constructor(private stateService: StateService){}

  goToDoor() {
    this.stateService.nextDoor();
    console.log("House: next door");
  }
}
