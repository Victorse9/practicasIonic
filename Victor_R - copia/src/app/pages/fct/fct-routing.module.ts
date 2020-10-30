import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FctPage } from './fct.page';

const routes: Routes = [
  {
    path: '',
    component: FctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FctPageRoutingModule {}
