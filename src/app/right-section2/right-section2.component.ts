import { Component, OnInit } from '@angular/core';
import { Follow } from '../services/follow.service';

@Component({
  selector: 'app-right-section2',
  templateUrl: './right-section2.component.html',
  styleUrls: ['./right-section2.component.css'],
  providers: [Follow]
})
export class RightSection2Component implements OnInit {

  allFollows : {name : string , handle:string, img:string }[] = [];
  constructor(private follow:Follow) { }

  ngOnInit(): void {

    console.log(this.follow);
    this.allFollows = this.follow.allFollows;
  }

}
