import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

import { HttpClientModule } from "@angular/common/http";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CardComponent, HeaderComponent, HomeComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
