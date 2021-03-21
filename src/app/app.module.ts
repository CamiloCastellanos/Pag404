import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgParticlesModule} from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagErrorComponent } from './components/pag-error/pag-error.component';
import { PagError2Component } from './components/pag-error2/pag-error2.component';

@NgModule({
  declarations: [
    AppComponent,
    PagErrorComponent,
    PagError2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
