import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftTemplateComponent } from './left-template/left-template.component';
import { CenterTemplateComponent } from './center-template/center-template.component';
import { RightTemplateComponent } from './right-template/right-template.component';
import { RightSection1Component } from './right-section1/right-section1.component';
import { RightSection2Component } from './right-section2/right-section2.component';
import { CenterSection1Component } from './center-section1/center-section1.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import  { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from './services/auth-gaurd.service';
import { loginstatus } from './services/login.service';


const appRoutes : Routes = [

  { path:'', component: LoginComponent},
  { path :'home', canActivate:[AuthGaurd], component : HomeComponent},
  { path:'page', component: PageComponent}

 
];




@NgModule({
  declarations: [
    AppComponent,
    LeftTemplateComponent, 
    CenterTemplateComponent,
    RightTemplateComponent,
    RightSection1Component,
    RightSection2Component,
    CenterSection1Component,
    LoginComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGaurd, loginstatus],
  bootstrap: [AppComponent]
})
export class AppModule { }
 