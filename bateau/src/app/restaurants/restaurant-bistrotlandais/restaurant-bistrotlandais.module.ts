import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantBistrotlandaisPageRoutingModule } from './restaurant-bistrotlandais-routing.module';

import { RestaurantBistrotlandaisPage } from './restaurant-bistrotlandais.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantBistrotlandaisPageRoutingModule,
    SharedModule
  ],
  declarations: [RestaurantBistrotlandaisPage]
})
export class RestaurantBistrotlandaisPageModule { }
