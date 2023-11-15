import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatGastmicherPage } from './boat-gastmicher.page';

const routes: Routes = [
  {
    path: '',
    component: BoatGastmicherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatGastmicherPageRoutingModule {}
