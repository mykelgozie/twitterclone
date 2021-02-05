import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[user]
})
export class LoginComponent implements OnInit {

  constructor(private user : user ) { }

  ngOnInit(): void {
  }


  onSubmit(form :NgForm){





    if(form.value.email == this.user.email && form.value.password == this.user.password){

        console.log("hey");
    }
    console.log(form.value.email);
    console.log(form.value.password);
    console.log(user);
  }

}
