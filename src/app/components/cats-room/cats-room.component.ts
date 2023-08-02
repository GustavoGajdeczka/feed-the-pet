import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cats-room',
  templateUrl: './cats-room.component.html',
  styleUrls: ['./cats-room.component.sass']
})
export class CatsRoomComponent {
  catFeed: boolean = false;

  constructor(private _snackBar: MatSnackBar){}

  feed(){
    var audio1 = new Audio('../../../assets/Meow.mp3')
    var audio2 = new Audio('../../../assets/feed.mp3')

    if(this.catFeed){
      audio1.play();
      this.catFeed = !this.catFeed
    }else{
      audio2.play();
      this.catFeed = !this.catFeed
      this._snackBar.open("mEow mEOw nOm NoM noM NOm", 'close', {duration: 6000});
    }
  }
}
