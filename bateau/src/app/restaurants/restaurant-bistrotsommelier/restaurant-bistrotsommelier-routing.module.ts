import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantBistrotsommelierPage } from './restaurant-bistrotsommelier.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantBistrotsommelierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantBistrotsommelierPageRoutingModule {}
