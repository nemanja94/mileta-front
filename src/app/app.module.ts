import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StuffService } from './services/stuff.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GranitComponent } from './components/granit/granit.component';
import { MermerComponent } from './components/mermer/mermer.component';
import { DetaljiComponent } from './components/detalji/detalji.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    GranitComponent,
    MermerComponent,
    DetaljiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StuffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
