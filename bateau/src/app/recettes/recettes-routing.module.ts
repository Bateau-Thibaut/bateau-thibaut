import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesPage } from './recettes.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesPage
  },
  {
    path: 'recette-homard',
    loadChildren: () => import('./recette-homard/recette-homard.module').then( m => m.RecetteHomardPageModule)
  },
  {
    path: 'recette-stjacques',
    loadChildren: () => import('./recette-stjacques/recette-stjacques.module').then( m => m.RecetteStjacquesPageModule)
  },
  {
    path: 'recette-bar',
    loadChildren: () => import('./recette-bar/recette-bar.module').then( m => m.RecetteBarPageModule)
  },
  {
    path: 'recette-tourteau',
    loadChildren: () => import('./recette-tourteau/recette-tourteau.module').then( m => m.RecetteTourteauPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesPageRoutingModule {}
