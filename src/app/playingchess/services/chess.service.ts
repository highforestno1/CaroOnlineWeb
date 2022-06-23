import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChatModel} from "../../room/models/chat-model";
import {environment} from "../../../environments/environment";
import {BoardTransaction} from "../models/BoardTransaction";
import {PickChess} from "../models/PickChess";
import {GenerateNewBoard} from "../../room/models/generate-new-board";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChessService {

  boardQueue = new BehaviorSubject("");

  constructor(private httpClient: HttpClient) {
  }

  getBoardTransactionById = (id: string) => this.httpClient.get<BoardTransaction>(
    `${environment.api_domain}/Board/get-board-transaction/${id}`);

  generateNewBoard = (generateNewBoard: GenerateNewBoard) => this.httpClient.post<BoardTransaction>(
    `${environment.api_domain}/Board`, generateNewBoard);

  pick = (pickChess: PickChess) =>
    this.httpClient.post<boolean>(`${environment.api_domain}/Board/pick`, pickChess);

}
