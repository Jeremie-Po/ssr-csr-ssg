import {Component, inject} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
title = inject(Title);
meta=inject(Meta);

constructor() {
  this.title.setTitle('je suis B');
  this.meta.updateTag({
    property:'og:title',
    content:'Éditions Le Robert : la référence en langues pour définir, traduire, corriger et certifier - Dictionnaire Le Robert'
  })
}
}
