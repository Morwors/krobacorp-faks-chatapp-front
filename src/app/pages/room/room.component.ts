import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMessage} from "../../model/message.model";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomID: string
  message: string;
  messages: IMessage[] = [];
  constructor(public activatedRoute: ActivatedRoute, public chatService: ChatService) {
    this.message = ""
    // @ts-ignore
    this.roomID = activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.chatService.initializeWebSocketConnection(this.roomID);
  }

  async sendMessage(){
    this.chatService.sendMessage(this.message);
  }



}
