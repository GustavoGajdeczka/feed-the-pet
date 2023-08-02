import { Component, Input } from '@angular/core';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.sass']
})
export class LockComponent {
  @Input() lockNum: number = 0;
  @Input() size: string = "small";
  lockOpen : boolean = false;

  constructor(private stateService: StateService){}

  switchLock(){
    this.stateService.switchLocks(this.lockNum)
    this.lockOpen = this.stateService.lock$(this.lockNum)
  }
}
