import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisilPage } from './misil.page';

const routes: Routes = [
  {
    path: '',
    component: MisilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisilPageRoutingModule {}
