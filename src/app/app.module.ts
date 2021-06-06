import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {HomeComponent} from './pages/home/home.component';
import {RoomComponent} from './pages/room/room.component';
import {MessageComponent} from './components/message/message.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserStore} from "./store/user.store";
import {AuthGuard} from "./guard/AuthGuard";
import {RoomStore} from "./store/room.store";
import {ChatStore} from "./store/chat.store";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RoomComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserStore,
    RoomStore,
    ChatStore,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
