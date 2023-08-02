import { Component } from '@angular/core';
import { StateService } from '../../service/state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second-door',
  templateUrl: './second-door.component.html',
  styleUrls: ['./second-door.component.sass']
})
export class SecondDoorComponent {
  doorOpen = false;
  private subscription: Subscription;

  constructor(private state: StateService){
    this.subscription = this.state.doorState$.subscribe((newVal: boolean) => {
      this.doorOpen = newVal;
    })
  }
}
