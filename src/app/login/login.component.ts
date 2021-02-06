import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../services/user.service';
import { Router } from '@angular/router';
import { loginstatus } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[user]
})
export class LoginComponent implements OnInit {

  errorMessage:string = "";
  error :boolean = false ;

  constructor(private user : user, private router : Router , private loginstatus: loginstatus) {
    localStorage.setItem('stats', ' ' );

    console.log(this.loginstatus.checkstatus());
   }

  ngOnInit(): void {
  }


  onSubmit(form :NgForm){

    if(form.value.email == this.user.email && form.value.password == this.user.password){

      console.log("work");

      localStorage.setItem('stats', form.value.email);
      this.loginstatus.status = JSON.parse(JSON.stringify( localStorage.getItem('stats')));
      this.router.navigate(['/home']);
    } else {
      this.error = true;
      this.errorMessage = "Invalid User Detail"
      setTimeout(()=>{
        this.errorMessage = ""
        this.error = false;
      }, 3000)
    }

  }

}
