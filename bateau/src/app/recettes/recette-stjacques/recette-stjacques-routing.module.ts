import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteStjacquesPage } from './recette-stjacques.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteStjacquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteStjacquesPageRoutingModule {}
