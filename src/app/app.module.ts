import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { AppRouteModule} from './app-route.module'
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports:      [ HttpClientModule,BrowserModule, AppRouteModule, ReactiveFormsModule,FormsModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, AddUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
