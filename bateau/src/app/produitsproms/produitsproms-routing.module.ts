import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitspromsPage } from './produitsproms.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitspromsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitspromsPageRoutingModule {}
