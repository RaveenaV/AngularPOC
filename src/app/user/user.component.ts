import { Component, OnInit } from '@angular/core';
import {UserService} from '../_service/user.service';

export class User {
  id:number;
  username: string;
  contact: string;
  address : string;
  profilepic : string; 
}

export const AllUsers: User[] = [
  {id:1, username:'Raveena', contact:'1234', address:'Hyd',profilepic:''},
  {id:2,  username: 'Narco', contact:'12345',address:'Hyd',profilepic:'' },
  { id:3,username: 'Bombasto', contact:'12346',address:'Hyd',profilepic:''}
];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user = User;
  Users = AllUsers; 
  showMessageBox = true;
  selectedUser:User;
  constructor(private userService: UserService) {
    this.showMessageBox = true;
   }

  ngOnInit() {
    this.userService.getUsers();
  }
  onSelect(user: User): void {
    this.selectedUser = user; 
    // this.showMessageBox = !this.showMessageBox;
  }
}
