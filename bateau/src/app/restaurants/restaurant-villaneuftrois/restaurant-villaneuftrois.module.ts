import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantVillaneuftroisPageRoutingModule } from './restaurant-villaneuftrois-routing.module';

import { RestaurantVillaneuftroisPage } from './restaurant-villaneuftrois.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantVillaneuftroisPageRoutingModule,
    SharedModule
  ],
  declarations: [RestaurantVillaneuftroisPage]
})
export class RestaurantVillaneuftroisPageModule { }
