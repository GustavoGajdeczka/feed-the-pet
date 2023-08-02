import { Component } from '@angular/core';
import { StateService } from './service/state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'feed-the-pet';
  receivedData: boolean = true;
  everyTrue: boolean = true;
  currentDoor: number = 0;
  private subscription: Subscription;

  constructor(private stateService: StateService){
    this.subscription = this.stateService.currentDoor$.subscribe((newVal:any) => {
      this.currentDoor = newVal;
      console.log("Subs currentDoor ", this.currentDoor);
    })
  }

  goToDoors(data: boolean) {
    this.receivedData = data;
  }

  restart(){
    this.stateService.restart();
  }
}
