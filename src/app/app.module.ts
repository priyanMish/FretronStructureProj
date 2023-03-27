import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects } from './store/effects/store.effects';

import {cartReducer, dropdownReducer, lazyList, storeReducer} from './store/reducers/store.reducer';
import { CartComponent } from './components/cart/cart.component';
import { LazyLoadListComponent } from './components/lazy-load-list/lazy-load-list.component'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    CartComponent,
       LazyLoadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({store:storeReducer, cart:cartReducer, dropDowm:dropdownReducer, lazyList:lazyList}),
    HttpClientModule,
    EffectsModule.forRoot([StoreEffects]),
    FooterComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
