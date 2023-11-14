import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoatDelabrisePage } from './boat-delabrise.page';

const routes: Routes = [
  {
    path: '',
    component: BoatDelabrisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatDelabrisePageRoutingModule { }
