import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Misil2Page } from './misil2.page';

const routes: Routes = [
  {
    path: '',
    component: Misil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Misil2PageRoutingModule {}
