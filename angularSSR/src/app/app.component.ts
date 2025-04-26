import {afterNextRender, afterRender, Component, viewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSSR';
  ref = viewChild('test');

  constructor(){
    // dans le cas d'un ssr, il n'est pas possible d'acceder aux webApi (localStorage,window.qlequchose)
    // car le fichier sera généréer coté(serveur)
    // par contre il est possible de donner des instructions qui s'executeront lorsque la' +
    // page web aura été rendu coté client

    // ne s execute qu"une fois"
    afterRender(()=>{
    console.log(this.ref()); //sera executé 3 fois

    })

    // s execute autant que la page est rendue÷
    afterNextRender(()=>{
    localStorage.setItem('picsou','Donald');
      console.log('afternextrender',this.ref()); //sera executé 1 fois


    })
  }
}
