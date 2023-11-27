import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { StoreModule } from "./store/store.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { provideHttpClient } from '@angular/common/http';
import { StaticDataSource } from '../model/static.datasource';
import { ProductRepository } from '../model/product.repository';

@NgModule({
  declarations: [
    AppComponent,
    //StoreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
    
  ],
  providers: [
    provideHttpClient(),
    StaticDataSource,
    ProductRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
