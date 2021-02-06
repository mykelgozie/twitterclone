import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { loginstatus } from "./login.service";

@Injectable()
 export class AuthGaurd implements CanActivate {

    

  constructor(private loginstatus : loginstatus, private router : Router){}
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot):Observable<boolean>|Promise<boolean> | boolean{
  
    if( this.loginstatus.status == " "){

         console.log("poor");
         this.router.navigate(['/']);
         return false;
    }
      return true;
  }


 }