import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayingchessRoutingModule } from './playingchess-routing.module';
import {PlaychessComponent} from "./playchess/playchess.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    PlaychessComponent
  ],
  exports: [
    PlaychessComponent
  ],
  imports: [
    CommonModule,
    PlayingchessRoutingModule,
    MatSnackBarModule
  ]
})
export class PlayingchessModule { }
