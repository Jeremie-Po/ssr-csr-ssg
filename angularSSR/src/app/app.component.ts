import {afterNextRender, afterRender, Component, viewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {AComponent} from './a/a.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, AComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
