import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatGastmicherPageRoutingModule } from './boat-gastmicher-routing.module';

import { BoatGastmicherPage } from './boat-gastmicher.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatGastmicherPageRoutingModule,
    SharedModule
  ],
  declarations: [BoatGastmicherPage]
})
export class BoatGastmicherPageModule { }
