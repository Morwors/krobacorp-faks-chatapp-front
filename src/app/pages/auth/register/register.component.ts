import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {IUserLogin, IUserRegister} from "../../../model/user.model";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    username: '',
    password: '',
    email: '',
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  async register() {
    console.log("Sending login request");
    if (this.checkoutForm.valid) {
      console.log("Form is valid");
      const user: IUserRegister = {
        username: this.checkoutForm.value.username,
        password: this.checkoutForm.value.password,
        email: this.checkoutForm.value.email
      }
      await this.authService.register(user);
    }

  }

}
