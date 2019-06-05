import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DonationComponent } from './donation/donation.component';
import { CoinmarketcapComponent } from './coinmarketcap/coinmarketcap.component';
import { Coin360Component } from './coin360/coin360.component';
import { ChauchaprojectComponent } from './chauchaproject/chauchaproject.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Component' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home Component' } },
  { path: 'configuration', component: ConfigurationComponent, data: { title: 'Configuration Component' } },
  { path: 'donation', component: DonationComponent, data: { title: 'Donation Component' } },
  { path: 'coinmarketcap', component: CoinmarketcapComponent, data: { title: 'CoinMarketCap Component' } },
  { path: 'coin360', component: Coin360Component, data: { title: 'Coin360 Component' } },
  { path: 'chauchaproject', component: ChauchaprojectComponent, data: { title: 'Home Component' } },

];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ConfigurationComponent,
    DonationComponent,
    CoinmarketcapComponent,
    Coin360Component,
    ChauchaprojectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
