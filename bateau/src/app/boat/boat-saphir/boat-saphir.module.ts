import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatSaphirPageRoutingModule } from './boat-saphir-routing.module';

import { BoatSaphirPage } from './boat-saphir.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatSaphirPageRoutingModule,
    SharedModule
  ],
  declarations: [BoatSaphirPage]
})
export class BoatSaphirPageModule { }
