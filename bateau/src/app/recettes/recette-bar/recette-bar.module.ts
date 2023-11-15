import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteBarPageRoutingModule } from './recette-bar-routing.module';

import { RecetteBarPage } from './recette-bar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteBarPageRoutingModule,
    SharedModule
  ],
  declarations: [RecetteBarPage]
})
export class RecetteBarPageModule { }
