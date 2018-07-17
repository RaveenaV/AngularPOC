import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AppRoutingModule } from './/app-routing.module';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'All Users' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,  LoginComponent, PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,RouterModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class AppModule { }
