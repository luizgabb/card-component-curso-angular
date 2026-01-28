import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";
import { Card2 } from "./card-2/card-2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Card2],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cards');
}
