import { Routes } from '@angular/router';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';
import {CocktailComponent} from './cocktail/cocktail.component';

export const routes: Routes = [

  {
    path:"",
    component:AComponent,
    title:'page A',
  },
  {
    path:"b",
    component:BComponent,
  },
  {
    path:"cocktails/:cocktailId",
    component:CocktailComponent,
  }

];
