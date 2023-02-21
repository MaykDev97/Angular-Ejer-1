import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulo Contador
import { ContadorModule } from './contador/contador.module';
//Modulo Heroes
import { HeroesModule } from './heroes/heroes.module';
// Modulo DBZ
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
