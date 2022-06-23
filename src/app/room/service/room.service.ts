import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../models/room-models";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) {
  }
  getAllRoom = () => this.httpClient.get<Room[]>(`${environment.api_domain}/Room`);


}

