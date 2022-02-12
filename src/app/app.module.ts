import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RiveModule } from 'ng-rive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
