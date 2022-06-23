import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PlaychessComponent} from "./playingchess/playchess/playchess.component";
import {PlayingchessModule} from "./playingchess/playingchess.module";
import {LoginModule} from "./login/login.module";
import {RoomModule} from "./room/room.module";
import {MainlayoutModule} from "./mainlayout/mainlayout.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainlayoutModule,
    RoomModule,
    BrowserAnimationsModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
