import { Component, Input } from '@angular/core';
import { StateService } from '../../service/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.sass'],
})
export class DoorComponent {
  @Input() childData: boolean = false;
  constructor(private stateService: StateService, private _snackBar: MatSnackBar){}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 4000});
  }

  nextDoor(){
    if(this.childData){
      this.stateService.nextDoor();
    }else{
      this.openSnackBar('the door will only open when the padlocks are unlocked','close')
    }
  }
}
