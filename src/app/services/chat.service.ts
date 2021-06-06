import {Injectable} from "@angular/core";
import axios from 'axios';

import {IUser, IUserLogin, IUserRegister} from "../model/user.model";
import {UserStore} from "../store/user.store";
import {Router} from "@angular/router";
import {RoomStore} from "../store/room.store";
import {ChatStore} from "../store/chat.store";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  stompClient: any
  msg: any
  roomID: String

  constructor(private chatStore: ChatStore, private roomStore: RoomStore, private router: Router) {
    this.msg = []
    this.roomID = ""
  }

  async loadUsers() {
    try {
      if (this.roomStore.shouldLoadMore) {
        console.log("Loading chats")
        const result = await axios.get('http://localhost:8080/user/loadUsers', {params: {page: 0}});
        const users: IUser[] = result.data;
        if (users.length < 10) {
          this.roomStore.changeShouldLoad(false);
        }
        console.log("Got resuts: ", users)

        this.roomStore.setRooms(users);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async findRoom(user: IUser, currentUser: IUser) {
    try {
      const users: IUser[] = [user, currentUser]
      const result = await axios.post('http://localhost:8080/room/findRoom', users);
      await this.router.navigate(['/room', result.data])
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  initializeWebSocketConnection(roomID: String) {
    try {
      this.roomID = roomID;
      const serverUrl = 'http://localhost:8080/gs-guide-websocket';
      const ws = new SockJS(serverUrl);
      this.stompClient = Stomp.over(ws);
      const that = this;
      // tslint:disable-next-line:only-arrow-functions
      this.stompClient.connect({}, function (frame: any) {
        that.stompClient.subscribe('/room/'+roomID, (message: any) => {
          console.log('Got message:', message);
          if (message.body) {
            that.msg.push(message.body);
          }
        });
      });
    }catch (e) {
      console.log('Error: ', e);
    }
  }
  sendMessage(message: any) {
    console.log('Sending message');
    const roomID = this.roomID
    this.stompClient.send('/room/'+roomID , {}, message);
  }

  // async loadChat(){
  //   try {
  //     if(this.roomStore.shouldLoadMore){
  //       console.log("Loading chats")
  //       const result = await axios.get('http://localhost:8080/user/loadUsers', {params: {page: 0}});
  //       const users: IUser[] = result.data;
  //       if(users.length<10){
  //         this.roomStore.changeShouldLoad(false);
  //       }
  //       console.log("Got resuts: ", users)
  //
  //       this.roomStore.setRooms(users);
  //     }
  //   } catch (e) {
  //     console.log("Error: ", e);
  //   }
  // }


}
