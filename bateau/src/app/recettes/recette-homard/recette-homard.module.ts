import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteHomardPageRoutingModule } from './recette-homard-routing.module';

import { RecetteHomardPage } from './recette-homard.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteHomardPageRoutingModule,
    SharedModule
  ],
  declarations: [RecetteHomardPage]
})
export class RecetteHomardPageModule { }
