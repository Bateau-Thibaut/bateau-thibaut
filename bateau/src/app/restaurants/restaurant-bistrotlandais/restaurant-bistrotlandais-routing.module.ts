import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantBistrotlandaisPage } from './restaurant-bistrotlandais.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantBistrotlandaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantBistrotlandaisPageRoutingModule {}
