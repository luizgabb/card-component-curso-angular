import { Component } from '@angular/core';
import { CardButton2 } from "../card-button-2/card-button-2";

@Component({
  selector: 'app-card-2',
  imports: [CardButton2],
  templateUrl: './card-2.html',
  styleUrl: './card-2.scss',
})
export class Card2 {

  tipo = 'Completo';
  preco = 39;

  getFullPrice() {
    return 'R$' + this.preco + ',97'
  }
}
