import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room/room.component';
import { RoomChatComponent } from './room-chat/room-chat.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoomChatDotnetComponent } from './room-chat-dotnet/room-chat-dotnet.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { ChessRoomComponent } from './chess-room/chess-room.component';
import {PlayingchessModule} from "../playingchess/playingchess.module";


@NgModule({
    declarations: [
        RoomComponent,
        RoomChatComponent,
        RoomChatDotnetComponent,
        ChessRoomComponent
    ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    PlayingchessModule
  ]
})
export class RoomModule { }
