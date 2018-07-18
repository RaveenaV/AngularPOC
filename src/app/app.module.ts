import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,  LoginComponent, PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,RouterModule, AppRoutingModule,
    HttpClientModule
    ,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
