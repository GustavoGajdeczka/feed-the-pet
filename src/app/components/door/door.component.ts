import { Component, Input } from '@angular/core';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.sass']
})
export class DoorComponent {
  @Input() childData: boolean = false;
  constructor(private stateService: StateService){}

  nextDoor(){
    if(this.childData){
      console.log("Go to next door")
      this.stateService.nextDoor();
    }else{
      console.log("This door stills closed");
    }
  }
}
