import {Component, OnInit} from '@angular/core';
import {count} from "rxjs";
import {ChessService} from "../services/chess.service";
import {BoardTransaction} from "../models/BoardTransaction";
import {PickChess} from "../models/PickChess";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-playchess',
  templateUrl: './playchess.component.html',
  styleUrls: ['./playchess.component.scss']
})
export class PlaychessComponent implements OnInit {

  boardTransactionId = '658fe816-00c4-4d97-abcd-d648a7cb6766';
  turnType = 0;
  isWin = false;
  isPick = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private chessService: ChessService,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.chessService.boardQueue.subscribe(res => {
      if (res != '') {
        this.boardTransactionId = res;
        this.getBoardTransaction();
      }
    })
  }

  chessBoard: any[] = [];

  private getBoardTransaction() {
    this.chessService.getBoardTransactionById(this.boardTransactionId).subscribe((res: BoardTransaction) => {
      console.log(res);
      this.chessBoard = this.convertStringTo2DArray(res?.board);
    })
  }

  tmp = '';

  pic(x: number, y: number) {
    if(this.chessBoard[x][y] != -1){
      return;
    }
    if (this.isWin) {
      this.openSnackBar();
      return;
    }
    const pickChess = new PickChess();
    pickChess.x = x;
    pickChess.y = y;
    pickChess.type = this.turnType;
    pickChess.boardId = this.boardTransactionId;



    this.chessService.pick(pickChess).subscribe(res => {
      this.getBoardTransaction();
      this.turnType = this.turnType == 0 ? 1 : 0;
      this.isWin = res;
      if (this.isWin) {
        this.openSnackBar()
      }
    })
  }

  IsWin(x: number, y: number) {
    return this.Iswinhang(x, y) || this.Iswincot(x, y) || this.IsWinCheochinh(x, y) || this.ISWincheophu(x, y);
  }

  Iswinhang(x: number, y: number) {
    let countLeft = 0;
    let countRight = 0;
    for (let i = y; i >= 0; i--) {
      if (this.chessBoard[x][i] === this.chessBoard[x][y]) {
        countLeft = countLeft + 1;
      }
    }
    for (let i = y + 1; i <= this.chessBoard[x].length; i++) {
      if (this.chessBoard[x][i] === this.chessBoard[x][y]) {
        countRight = countRight + 1;
      }
    }
    return countRight + countLeft === 5;
  }

  Iswincot(x: number, y: number) {
    let counttop = 0;
    let countbot = 0;
    for (let i = x; i >= 0; i--) {
      if (this.chessBoard[i][y] === this.chessBoard[x][y]) {
        counttop = counttop + 1;
      } else {
        break
      }
    }
    for (let i = x + 1; i <= this.chessBoard.length; i++) {
      if (this.chessBoard[i][y] === this.chessBoard[x][y]) {
        countbot = countbot + 1;
      } else {
        break
      }
    }
    return countbot + counttop == 5;
  }

  IsWinCheochinh(x: number, y: number) {
    let counttop = 0;
    let countbot = 0;
    for (let i = 0; i <= x; i++) {

      if (this.chessBoard[x - i][y - i] === this.chessBoard[x][y]) {
        counttop = counttop + 1;
      } else {
        break
      }
    }
    for (let i = 1; i <= (this.chessBoard.length - x); i++) {

      if (this.chessBoard[x + i][y + i] === this.chessBoard[x][y]) {
        countbot = countbot + 1;
      } else {
        break
      }
    }
    return countbot + counttop === 5;
  }

  ISWincheophu(x: number, y: number) {
    let counttop = 0;
    let countbot = 0;
    for (let i = 0; i <= x; i++) {
      if (this.chessBoard[x - i][y + i] === this.chessBoard[x][y]) {
        counttop = counttop + 1;
      } else {
        break;
      }
    }
    for (let i = 1; i <= this.chessBoard.length; i++) {
      if (this.chessBoard[x + i][y - i] === this.chessBoard[x][y]) {
        countbot = countbot + 1;
      } else {
        break;
      }
    }
    return countbot + counttop === 5;
  }

  convertStringTo2DArray(boardString: string) {
    const arr = boardString.split(',');
    const arrSize = Math.sqrt(arr.length);

    const result: any[] = [];
    let x = 0, y = 0;
    let tmpArr: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      tmpArr = tmpArr.concat(arr[i]);
      y++;
      if (y == arrSize) {
        y = 0;
        x++;
        result.push(tmpArr);
        let newArr: any[] = [];
        tmpArr = newArr;
      }
    }
    console.log(result)
    return result;
  }
  openSnackBar() {
    // @ts-ignore
    this._snackBar.open('Ván cờ kết thúc', "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
