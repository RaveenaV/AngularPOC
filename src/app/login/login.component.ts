  import { Component, OnInit } from '@angular/core';
import { User, UserComponent } from '../user/user.component';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../_service/user.service';

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
errorMessage:  string;

constructor(private router: Router, private userService : UserService) {
}
myClickFunction() {
    
      let user= this.userService.Login(this.model.username, this.model.password);
      if(user)
      {
      this.router.navigate(['/home']);
      localStorage.setItem('currentUser', JSON.stringify(user));
      }
      else{
        this.errorMessage= "user does not exist. please register here"
      }
   }

}
