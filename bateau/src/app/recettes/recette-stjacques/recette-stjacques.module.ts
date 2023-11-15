import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteStjacquesPageRoutingModule } from './recette-stjacques-routing.module';

import { RecetteStjacquesPage } from './recette-stjacques.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteStjacquesPageRoutingModule,
    SharedModule
  ],
  declarations: [RecetteStjacquesPage]
})
export class RecetteStjacquesPageModule { }
