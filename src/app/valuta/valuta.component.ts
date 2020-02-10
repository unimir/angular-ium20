/*
  @author: Mirko Guida
  @descrizione: prototipo esame IUM - Pagina che visualizza la valutazione
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valuta',
  templateUrl: './valuta.component.html',
  //styleUrls: ['./valuta.component.css']
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class ValutaComponent implements OnInit {

  constructor() { }

  currentLocation = 6;
  currentServizio = 6;
  currentMenu = 6;
  currentCosto = 6;
  votato = false;

  ngOnInit(): void {
  }

  onVota(): void{
    this.votato = true;
  }

}
