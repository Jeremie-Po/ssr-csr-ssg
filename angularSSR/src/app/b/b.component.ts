import {Component, inject} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
title = inject(Title);

constructor() {
  this.title.setTitle('je suis B');
}
}
