import { Component, Input } from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-first-door',
  templateUrl: './first-door.component.html',
  styleUrls: ['./first-door.component.sass']
})
export class FirstDoorComponent {
  doorOpen = false;
  private subscription: Subscription;

  constructor(private state: StateService){
    this.subscription = this.state.doorState$.subscribe((newVal: boolean) => {
      this.doorOpen = newVal;
    })
  }
}
