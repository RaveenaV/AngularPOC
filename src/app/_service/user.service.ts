import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User } from '../_models/user';  
import { map } from "rxjs/operators";
import { Group } from '../_models/group';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private apiUrl: string

    AllUsers: User[] = [
    {id:1, username:'sravan', password:'sravan',firstName : "sravan", lastName: "Kumar"   },
    {id:2,  username: 'pavan', password:'pavan',firstName : "pavan", lastName: "veer"  },
    { id:3,username: 'sita', password :'sita',firstName : "sita", lastName: "ram"  },
    { id:4,username: 'Venki', password :'venki',firstName : "venki", lastName: "Mooga"  },
    { id:5,username: 'Bal', password :'bal',firstName : "bal", lastName: "reddy"  }
  ];
  
      AllGroups: Group[] = [
    { id: 1, name: 'GRP1', members: this.AllUsers.filter( function (user) { return (user.id > 2);}) },
    { id: 2, name: 'GRP2',members: this.AllUsers.filter( function (user) { return (user.id < 4);})   },
    { id: 3, name: 'GRP3',members: this.AllUsers.filter( function (user) { return (user.id == 2);})   }
  ];

  constructor(private httpClient: HttpClient) { 
    this.apiUrl="http://localhost:4323/"
  }

  Login(userName: string, password: string){ 
    // return this.httpClient.post(this.apiUrl+'User/authenticate',{userName: userName, Password: password}) 
  }

  Register(newUser: User){ 
  //  return this.httpClient.post(this.apiUrl+'User/Register',{user : newUser }) 
  }

  getUsers() {
  //  return this.httpClient.get(this.apiUrl+'User' ).pipe(map((response: Response) => response.json()));
  return this.AllUsers;
  }

  GetUserFriends(id: number) {
    // this.httpClient.get(this.apiUrl+'User/GetFriends/'+id  ).pipe(map((response: Response) => response.json()));
    // return null;

    return this.AllUsers.filter(user=>user.id!=id);
  }

  GetUserGroups(id: number) {
    
    // this.httpClient.get(this.apiUrl+'User/GetGroups/'+id  ).pipe(map((response: Response) => response.json()));
    // return null;

    return this.AllGroups.filter(g=>g.members.filter(m=>m.id==id));
  }
}


