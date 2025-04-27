import {afterNextRender, afterRender, Component, viewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {AComponent} from './a/a.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, AComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
