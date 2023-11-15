import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantVillaneuftroisPage } from './restaurant-villaneuftrois.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantVillaneuftroisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantVillaneuftroisPageRoutingModule {}
