import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

export class User {
  id:number;
  username: string;
  password: string;
}

export const AllUsers: User[] = [
  {id:1, username:'Raveena', password:'R' },
  {id:2,  username: 'Narco', password:'N' },
  { id:3,username: 'Bombasto', password :'B' }
];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user = User;
  Users = AllUsers; 
  constructor(private userService: UserService) {
   
   }

  ngOnInit() {
    this.userService.getUsers().subscribe(users =>this.Users = users);
  }
  onSelect(user: User): void {
    alert(this.user);
  }
}
