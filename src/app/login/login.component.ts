  import { Component, OnInit } from '@angular/core';
import { User, UserComponent } from '../user/user.component';
import { RouterModule, Routes } from '@angular/router';

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


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }
  // model: User = {
  //   username: 'Raveena',
  //   password: 'R'
  // };
model: any = {};

constructor() {
}
myClickFunction() {
    if (this.model.username == 'r' && this.model.password== 'a')
   {
     
}
}
}
