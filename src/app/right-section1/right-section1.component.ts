import { Component, OnInit } from '@angular/core';
import { Trends } from '../services/trends.service';

@Component({
  selector: 'app-right-section1',
  templateUrl: './right-section1.component.html',
  styleUrls: ['./right-section1.component.css'],
  providers: [Trends]
})
export class RightSection1Component implements OnInit {
  
  allTrends:{ topic:string, hashTag:string, tweetsNum:string }[] = [];
  feeds:{img:string, tweet:string, date:string, name:string, handle:string, tweetpic:string,retweets:number,like:number,comment:number,id:number }[] = [];
 
  constructor(private trends:Trends) { }

  ngOnInit(): void {
     
   this.allTrends = this.trends.allTrends ;
  
  }

}
