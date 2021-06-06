import {Component, Input, OnInit} from '@angular/core';
import {IMessage} from "../../model/message.model";
import {UserStore} from "../../store/user.store";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // @ts-ignore
  @Input() message: String;
  constructor(public userStore: UserStore) { }


  ngOnInit(): void {
  }

}
