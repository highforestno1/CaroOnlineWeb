import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaychessComponent} from "./playchess/playchess.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayingchessRoutingModule { }
