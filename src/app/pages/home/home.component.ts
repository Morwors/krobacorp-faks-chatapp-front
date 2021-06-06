import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {RoomStore} from "../../store/room.store";
import {Router} from "@angular/router";
import {IUser} from "../../model/user.model";
import {UserStore} from "../../store/user.store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private chatService: ChatService, public roomStore: RoomStore, private userStore: UserStore) {
  }

  async ngOnInit(): Promise<void> {
    await this.chatService.loadUsers();
  }

  async navigateToRoom(user: IUser) {
    const tmpUser: IUser = {
      objectId: "60bcdc1b75a24c2d5f91fcbc",
      email: "aleksaton@gmail.com",
      username: "Testis",
      password: "123456"
    }
    await this.chatService.findRoom(user, tmpUser);
  }


}
