import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-third-door',
  templateUrl: './third-door.component.html',
  styleUrls: ['./third-door.component.sass']
})
export class ThirdDoorComponent {
  doorOpen = false;
  private subscription: Subscription;

  constructor(private state: StateService){
    this.subscription = this.state.doorState$.subscribe((newVal: boolean) => {
      this.doorOpen = newVal;
    })
  }
}
