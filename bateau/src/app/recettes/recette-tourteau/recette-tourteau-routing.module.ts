import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteTourteauPage } from './recette-tourteau.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteTourteauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteTourteauPageRoutingModule {}
