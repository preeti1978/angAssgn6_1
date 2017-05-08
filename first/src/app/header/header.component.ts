import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {


  constructor() { }

  h2Class:string='h2-class';

  greenColor:string='green';
 listenClick=(myName)=>{
 	console.log("button clicked "+myName);
 }
}
