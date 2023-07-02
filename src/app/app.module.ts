import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
