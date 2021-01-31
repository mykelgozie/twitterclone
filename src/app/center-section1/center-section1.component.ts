import { Component, OnInit } from '@angular/core';
import { Tweets } from '../services/tweets.service';


@Component({
  selector: 'app-center-section1',
  templateUrl: './center-section1.component.html',
  styleUrls: ['./center-section1.component.css'],
  providers : [Tweets]
})
export class CenterSection1Component implements OnInit {

  textArea:string = "";
  textCheck:boolean = true;
  

  feeds:{img:string, tweet:string, date:string, name:string, handle:string, tweetpic:string,retweets:number,like:number,comment:number,id:number }[] = [];


  constructor( private tweets:Tweets) { }

  ngOnInit(): void {

    this.feeds = this.tweets.allFeeds;
    console.log(this.feeds.length);
  }

  addRetweet(id:number){

  var item =  this.feeds.find(element => {

     return   element.id == id;
      
    })

  }

  addTweet(){

    this.tweets.addTweets("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU", this.textArea,"6/9/2000","jack","jake_f","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU");
    this.textArea ="";
  }


  

}
