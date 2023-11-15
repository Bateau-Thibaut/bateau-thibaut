import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantBistrotgasconsPage } from './restaurant-bistrotgascons.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantBistrotgasconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantBistrotgasconsPageRoutingModule {}
