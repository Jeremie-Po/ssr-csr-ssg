import {Component, inject} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  meta=inject(Meta);

  constructor() {
    this.meta.updateTag({
      property:'og:title',
      content:'PAGE A Éditions Le Robert : la référence en langues pour définir, traduire, corriger et certifier - Dictionnaire Le Robert'
    })
  }
}
