import { Component, ViewEncapsulation } from '@angular/core';
import { CardButton } from '../card-button/card-button';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-card',
  imports: [CardButton, MatSliderModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  //encapsulation: ViewEncapsulation.None
})
export class Card {
 plano = {
  tipo: 'Simples',
  preco: 19,
 }
}
