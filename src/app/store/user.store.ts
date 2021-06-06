import {action, observable} from 'mobx-angular';
import {Injectable} from '@angular/core';
import {IUser} from "../model/user.model";


@Injectable()
export class UserStore {
  // @ts-ignore
  @observable user: IUser;
  constructor() {
  }
  @action
  setUser(user: IUser) {
    this.user = user;
  }




}
