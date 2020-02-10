import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValutaComponent } from './valuta/valuta.component';
import { StatisticheComponent } from './statistiche/statistiche.component';


const routes: Routes = [
  { path: 'valuta', component: ValutaComponent },  
  { path: 'statistiche', component: StatisticheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
