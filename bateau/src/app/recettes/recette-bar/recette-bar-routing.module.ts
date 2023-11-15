import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteBarPage } from './recette-bar.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteBarPageRoutingModule {}
