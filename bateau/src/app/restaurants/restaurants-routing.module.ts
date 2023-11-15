import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsPage } from './restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsPage
  },
  {
    path: 'restaurant-bistrotgascons',
    loadChildren: () => import('./restaurant-bistrotgascons/restaurant-bistrotgascons.module').then( m => m.RestaurantBistrotgasconsPageModule)
  },
  {
    path: 'restaurant-foudelile',
    loadChildren: () => import('./restaurant-foudelile/restaurant-foudelile.module').then( m => m.RestaurantFoudelilePageModule)
  },
  {
    path: 'restaurant-bistrotlandais',
    loadChildren: () => import('./restaurant-bistrotlandais/restaurant-bistrotlandais.module').then( m => m.RestaurantBistrotlandaisPageModule)
  },
  {
    path: 'restaurant-villaneuftrois',
    loadChildren: () => import('./restaurant-villaneuftrois/restaurant-villaneuftrois.module').then( m => m.RestaurantVillaneuftroisPageModule)
  },
  {
    path: 'restaurant-bistrotsommelier',
    loadChildren: () => import('./restaurant-bistrotsommelier/restaurant-bistrotsommelier.module').then( m => m.RestaurantBistrotsommelierPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsPageRoutingModule {}
