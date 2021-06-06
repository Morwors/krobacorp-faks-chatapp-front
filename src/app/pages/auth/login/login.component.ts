import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IUserLogin} from "../../../model/user.model";
import {AuthService} from "../../../services/auth.service";
import {UserStore} from "../../../store/user.store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, public userStore: UserStore) {
  }

  async login() {
    console.log("Sending login request");
    if (this.checkoutForm.valid) {
      console.log("Form is valid");
      const user: IUserLogin = {
        username: this.checkoutForm.value.username,
        password: this.checkoutForm.value.password
      }
      await this.authService.login(user);
    }

  }

  ngOnInit(): void {
  }

}
