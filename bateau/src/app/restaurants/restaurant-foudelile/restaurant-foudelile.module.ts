import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantFoudelilePageRoutingModule } from './restaurant-foudelile-routing.module';

import { RestaurantFoudelilePage } from './restaurant-foudelile.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantFoudelilePageRoutingModule,
    SharedModule
  ],
  declarations: [RestaurantFoudelilePage]
})
export class RestaurantFoudelilePageModule { }
