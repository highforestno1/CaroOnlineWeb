import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomComponent} from "./room/room.component";
import {RoomChatComponent} from "./room-chat/room-chat.component";
import {RoomChatDotnetComponent} from "./room-chat-dotnet/room-chat-dotnet.component";
import {ChessRoomComponent} from "./chess-room/chess-room.component";

const routes: Routes = [
  {path: 'room', component: RoomComponent},
  {path: 'room-chat', component: RoomChatComponent},
  {path: 'room-chat-dotnet', component: RoomChatDotnetComponent},
  {path: 'chess-room', component: ChessRoomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {
}
