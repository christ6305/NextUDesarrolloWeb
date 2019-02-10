import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user.component';
import { ShowUsersComponent } from './show-users.component';
import { HttpService } from './http.service';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
