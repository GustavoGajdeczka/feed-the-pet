import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstDoorComponent } from './components/first-door/first-door.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondDoorComponent } from './components/second-door/second-door.component';
import { ThirdDoorComponent } from './components/third-door/third-door.component';
import { DoorComponent } from './components/door/door.component';
import { HouseComponent } from './components/house/house.component';
import { LockComponent } from './components/lock/lock.component';
import { NumberLockComponent } from './components/number-lock/number-lock.component';
import { FormsModule } from '@angular/forms';
import { CatsRoomComponent } from './components/cats-room/cats-room.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstDoorComponent,
    SecondDoorComponent,
    ThirdDoorComponent,
    DoorComponent,
    HouseComponent,
    LockComponent,
    NumberLockComponent,
    CatsRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
