import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoatDelabrisePageRoutingModule } from './boat-delabrise-routing.module';

import { BoatDelabrisePage } from './boat-delabrise.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoatDelabrisePageRoutingModule,
    SharedModule
  ],
  declarations: [BoatDelabrisePage]
})
export class BoatDelabrisePageModule { }
