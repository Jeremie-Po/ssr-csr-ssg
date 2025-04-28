import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'cocktails/:cocktailId',
    //permet de lui dire de ne pas faire de prerendering sur cette route et de générer les routes coté serveur
    //renderMode: RenderMode.Server

    renderMode:RenderMode.Prerender,
    async getPrerenderParams(){
      const cocktails =await (await fetch('https://restapi.fr/api/acocktails')).json();
      return cocktails.map((c : any)=>({
          'cocktailId': c._id,
      }))
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
