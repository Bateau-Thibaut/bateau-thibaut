import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantFoudelilePage } from './restaurant-foudelile.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantFoudelilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantFoudelilePageRoutingModule {}
