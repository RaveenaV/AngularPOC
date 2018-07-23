import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  currentUser: User
  constructor(private router: Router) {  
    if(JSON.parse(localStorage.getItem('currentUser')))
    {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

}
