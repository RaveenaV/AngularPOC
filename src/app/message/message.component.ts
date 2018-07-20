import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/user.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() user: User;

  constructor() {  
  
  }

  ngOnInit() { 
  }

}
