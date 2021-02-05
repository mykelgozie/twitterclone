import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[user]
})
export class LoginComponent implements OnInit {

  errorMessage:string = "";
  error :boolean = false ;

  constructor(private user : user, private router : Router ) { }

  ngOnInit(): void {
  }


  onSubmit(form :NgForm){





    if(form.value.email == this.user.email && form.value.password == this.user.password){
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
