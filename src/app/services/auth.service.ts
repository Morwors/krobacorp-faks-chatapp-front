import {Injectable} from "@angular/core";
import axios from 'axios';

import {IUser, IUserLogin, IUserRegister} from "../model/user.model";
import {UserStore} from "../store/user.store";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userStore: UserStore, private router: Router) {
  }

  async register(user: IUserRegister) {
    try {
      const result = await axios.post('http://localhost:8080/user/register', user);
      this.userStore.setUser(result.data as IUser)

      console.log("Sending user: ", user);
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async login(user: IUserLogin) {
    try {
      console.log("Sending user: ", user);
      const result = await axios.post('http://localhost:8080/user/login', user);
      console.log("Got result: ", result);
      this.userStore.setUser(result.data as IUser)
      if (this.userStore.user) {
        await this.router.navigate(['']);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }


}
