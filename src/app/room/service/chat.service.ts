import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ChatModel} from "../models/chat-model";


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) {
  }

  chat = (chatModel: ChatModel) => this.httpClient.post(
    `${environment.api_domain}/test`, chatModel);
}
