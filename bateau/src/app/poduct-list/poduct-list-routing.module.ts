import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoductListPage } from './poduct-list.page';

const routes: Routes = [
  {
    path: '',
    component: PoductListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoductListPageRoutingModule {}
