  import { Component, OnInit } from '@angular/core';
import { User, UserComponent } from '../user/user.component';
import { Router } from '../../../node_modules/@angular/router';

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

constructor(private router: Router) {
}
myClickFunction() {
    if (this.model.username == 'r' && this.model.password== 'a')
   {
     debugger;
      this.router.navigate(['/home']);
   }
}
}
