import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-template',
  templateUrl: './center-template.component.html',
  styleUrls: ['./center-template.component.css']
})
export class CenterTemplateComponent implements OnInit {

  textArea:string = "";
  textCheck:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addTweet(){

    console.log("hey");
  }

}
