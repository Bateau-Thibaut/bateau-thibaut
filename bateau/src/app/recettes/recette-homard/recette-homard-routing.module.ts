import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteHomardPage } from './recette-homard.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteHomardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteHomardPageRoutingModule {}
