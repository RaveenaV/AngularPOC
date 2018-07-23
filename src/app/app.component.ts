import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { User } from './_models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
 
  currentUser: User; 

  constructor(private router: Router) {
  }

  IsUsedLoggedIn(){
    if(localStorage.getItem('currentUser'))
    { 
      debugger;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
      return true;
    }
    else{
      return false;
    }
  }

  LogOut()
  {
      localStorage.removeItem('currentUser'); 
      this.router.navigate(['./home'])
  }
}
