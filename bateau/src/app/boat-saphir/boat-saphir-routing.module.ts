import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatSaphirPage } from './boat-saphir.page';

const routes: Routes = [
  {
    path: '',
    component: BoatSaphirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatSaphirPageRoutingModule {}
