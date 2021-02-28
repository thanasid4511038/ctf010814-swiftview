import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { OwnersComponent } from './component/owners/owners.component';
import { LoginComponent } from './component/login/login.component';
import { PopupComponent } from './component/popup/popup.component';
import { SearchComponent } from './component/search/search.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    ShopComponent,
    OwnersComponent,
    LoginComponent,
    PopupComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
