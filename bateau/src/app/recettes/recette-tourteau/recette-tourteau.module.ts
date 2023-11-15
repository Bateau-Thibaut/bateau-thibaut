import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteTourteauPageRoutingModule } from './recette-tourteau-routing.module';

import { RecetteTourteauPage } from './recette-tourteau.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteTourteauPageRoutingModule,
    SharedModule
  ],
  declarations: [RecetteTourteauPage]
})
export class RecetteTourteauPageModule { }
