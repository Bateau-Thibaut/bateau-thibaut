import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoductListPageRoutingModule } from './poduct-list-routing.module';

import { PoductListPage } from './poduct-list.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoductListPageRoutingModule,
    SharedModule
  ],
  declarations: [PoductListPage]
})
export class PoductListPageModule {}
