import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-cocktail',
  imports: [],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css'
})
export class CocktailComponent {
cocktailId = toSignal(inject(ActivatedRoute).params)()!['cocktailId'];
title = inject(Title);

constructor (){
  this.title.setTitle(`cocktailId: ${this.cocktailId}`);
}
}
