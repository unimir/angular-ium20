/*
  @author: Mirko Guida
  @descrizione: prototipo esame IUM - Pagina che visualizza le statistiche
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistiche',
  templateUrl: './statistiche.component.html',
  styleUrls: ['./statistiche.component.css']
})
export class StatisticheComponent implements OnInit {

  constructor() { }

  valMedia = 8.0;
  valLocale = 7.9;
  valService = 7.2;
  valMenu = 7.1;
  valCosto = 8;
  visualType = 'Totale';

  ngOnInit(): void {
  }

  onYear(): void{
    this.valMedia = 7.5;
    this.valLocale = 7.2;
    this.valService = 7.3;
    this.valMenu = 7.0;
    this.valCosto = 8.4;
    this.visualType = 'Ultimo Anno';
  }
  onMonth(): void{
    this.valMedia = 9.0;
    this.valLocale = 8.7;
    this.valService = 9.4;
    this.valMenu = 8.51;
    this.valCosto = 9.6;
    this.visualType = 'Ultimo Mese';
  }
  onWeek(): void{
    this.valMedia = 8.1;
    this.valLocale = 8.3;
    this.valService = 7.8;
    this.valMenu = 7.2;
    this.valCosto = 8.5;
    this.visualType = 'Ultima Settimana';
  }
  onTotal(): void{
    this.valMedia = 8.0;
    this.valLocale = 7.9;
    this.valService = 7.2;
    this.valMenu = 7.1;
    this.valCosto = 8.2;
    this.visualType = 'Totale';
  }


}
