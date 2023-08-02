import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-number-lock',
  templateUrl: './number-lock.component.html',
  styleUrls: ['./number-lock.component.sass']
})
export class NumberLockComponent {
  numpad: string = '';

  constructor(private stateService: StateService){}

  addNumber(number:number){
    this.numpad += number.toString();
    this.stateService.verifyThirdDoor(this.numpad);
  }

  clean(){
    this.numpad = ""
    this.stateService.verifyThirdDoor(this.numpad);
  }
}
