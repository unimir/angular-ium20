import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValutaComponent } from './valuta/valuta.component';
import { StatisticheComponent } from './statistiche/statistiche.component';

@NgModule({
  declarations: [
    AppComponent,
    ValutaComponent,
    StatisticheComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
