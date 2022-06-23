import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room-models';
import {RoomService} from "../service/room.service";
import {Route, Router} from "@angular/router";
import {ChessService} from "../../playingchess/services/chess.service";
import {GenerateNewBoard} from "../models/generate-new-board";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  listRoom: Room[] = [];
  constructor(
    private roomService: RoomService,
    private route: Router,
    private chessService: ChessService
  ) { }

  ngOnInit(): void {
    this.roomService.getAllRoom().subscribe((res:Room[]) => {
      this.listRoom = res;
      }
    )
  }

  handleClick(room: Room) {
    // @ts-ignore
    if (room.status == 0){
      if (room.boardTransactionId == '00000000-0000-0000-0000-000000000000') {
        let newBoardRequest = new GenerateNewBoard();
        newBoardRequest.roomId = room.id;
        newBoardRequest.boardSize = 12;

        this.chessService.generateNewBoard(newBoardRequest).subscribe(res => {
          room.boardTransactionId = res.id;
          console.log(res);
          this.chessService.boardQueue.next(room.boardTransactionId);
        })
      } else {
        this.chessService.boardQueue.next(room.boardTransactionId);
      }

      this.route.navigate(['/chess-room']);
    }
  }
}
