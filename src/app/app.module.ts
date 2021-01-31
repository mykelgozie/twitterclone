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

@NgModule({
  declarations: [
    AppComponent,
    LeftTemplateComponent,
    CenterTemplateComponent,
    RightTemplateComponent,
    RightSection1Component,
    RightSection2Component,
    CenterSection1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
