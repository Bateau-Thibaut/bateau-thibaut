import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatAquilonPageRoutingModule } from './boat-aquilon-routing.module';

import { BoatAquilonPage } from './boat-aquilon.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatAquilonPageRoutingModule,
    SharedModule
  ],
  declarations: [BoatAquilonPage]
})
export class BoatAquilonPageModule { }
