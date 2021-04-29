import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/*** import * as EventEmitter from 'node:events'; ***/

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"];
  @Input() parentData:any;
  @Output() childEvent = new EventEmitter();
  constructor() { }  

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Hey there');
  }

}
