import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  
templateUrl: './userlist.component.html',

  styleUrls: ['./userlist.component.css']

})

export class UserlistComponent  {

  
   constructor() { }
   


  

Public userList: any =
 [
{name: “Avnesh Shakya”, age: “26”, profession: “Employee”}, 
{name: “Adam”, age: “30”, profession: “Employee”},
{name: “Arpita”, age: “15”, profession: “Student”},
{name: “Nayantara”, age: “36”, profession: “Actor”}

];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  
templateUrl: './userlist.component.html',

  styleUrls: ['./userlist.component.css']

})

export class UserlistComponent  {

  
   constructor() { }
   


  

public userList: any =
 [
{name: "Avnesh Shakya", age: "26", profession: "Employee"}, 
{name: "Adam", age: "30", profession: "Employee"},
{name: "Arpita", age: "15", profession: "Student"},
{name: "Nayantara", age: "36", profession: "Actor"}

];

}

