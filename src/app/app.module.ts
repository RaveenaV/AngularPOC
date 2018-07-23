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
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,  
    LoginComponent, 
    PageNotFoundComponentComponent,
     HomeComponent,
     MessageComponent,
     WelcomeComponent,
     RegisterComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,RouterModule, AppRoutingModule,
    HttpClientModule
    ,HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
