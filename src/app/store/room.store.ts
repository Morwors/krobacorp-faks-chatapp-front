import {action, observable} from 'mobx-angular';
import {Injectable} from '@angular/core';
import {IUser} from "../model/user.model";


@Injectable()
export class RoomStore {
  // @ts-ignore
  @observable page: number;
  @observable rooms: IUser[];
  @observable shouldLoadMore: boolean;

  constructor() {
    this.shouldLoadMore = true;
    this.page = 0;
    this.rooms = [];
  }

  @action
  nextPage() {
    this.page++
  }

  @action
  previousPage() {
    this.page--;
  }

  @action
  changeShouldLoad(option: boolean) {
    this.shouldLoadMore = option;
  }

  @action
  setRooms(rooms: IUser[]) {
    this.rooms.push(...rooms);
  }

  @action
  addRoom(room: IUser) {
    this.rooms.push(room);
  }


}
