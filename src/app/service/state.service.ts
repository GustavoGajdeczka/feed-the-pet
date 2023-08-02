import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _currentDoor = new BehaviorSubject<number>(0);
  private _locksFirstDoor = [false,false,false,false];
  private _locksSecondDoor = [false,false,false,false,false];
  private _count = new BehaviorSubject<boolean[]>(this._locksFirstDoor);
  private openDoor = new BehaviorSubject<boolean>(false);
  doorState$ = this.openDoor.asObservable();

  get locks$(){
    return this._count.asObservable();
  }

  get currentDoor$(){
    return this._currentDoor.asObservable();
  }

  lock$(lockNum:number){
    return this._count.getValue()[lockNum]
  }

  nextDoor(){
    let currentDoor = (this._currentDoor.getValue());
    currentDoor++;
    this._currentDoor.next(currentDoor);
    console.log("State: next door ", currentDoor);
    this.openDoor.next(false);
  }

  switchLocks(lockNum:number){
    if(this._currentDoor.getValue() == 1){
      if(lockNum == 0 && 
          (this._locksFirstDoor[1] == false ||
          this._locksFirstDoor[2] == false ||
          this._locksFirstDoor[3] == false ))
      {
        console.log("do nothing");
        this._locksFirstDoor[0] == false
        this._count.next(this._locksFirstDoor);
      }else{
        this._locksFirstDoor[lockNum] = !this._locksFirstDoor[lockNum];
        this._count.next(this._locksFirstDoor);
      }
      if(this._locksFirstDoor.every(elem => elem == true)){
        console.log("Open Door")
        this.openDoor.next(true);
      }else{
        this.openDoor.next(false);
      }
    }
    if(this._currentDoor.getValue() == 2){
      this._locksSecondDoor[lockNum] = !this._locksSecondDoor[lockNum];
      this._count.next(this._locksSecondDoor);
      this.openDoor.next(this.verifySecondDoor());
    }
  }

  verifyThirdDoor(password:string){
    this.openDoor.next(password == '28091998');
  }

  verifySecondDoor(){
    let verify = false;
    for (let index = 0; index < this._locksSecondDoor.length; index++) {
      if(index == 2 && !this._locksSecondDoor[index]){
        verify = true
      }
      if(index != 2 && !this._locksSecondDoor[index]){
        verify = false;
        break;
      }
    }
    return verify;
  }

  restart(){
    this._currentDoor.next(0);
    this._locksFirstDoor = [false,false,false,false];
    this._locksSecondDoor = [false,false,false,false,false];
  }
}
