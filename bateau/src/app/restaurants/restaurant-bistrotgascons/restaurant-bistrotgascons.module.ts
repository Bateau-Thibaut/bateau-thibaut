import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantBistrotgasconsPageRoutingModule } from './restaurant-bistrotgascons-routing.module';

import { RestaurantBistrotgasconsPage } from './restaurant-bistrotgascons.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantBistrotgasconsPageRoutingModule,
    SharedModule
  ],
  declarations: [RestaurantBistrotgasconsPage]
})
export class RestaurantBistrotgasconsPageModule { }
