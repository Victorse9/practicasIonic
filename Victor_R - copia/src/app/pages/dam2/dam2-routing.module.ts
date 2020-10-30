import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dam2Page } from './dam2.page';

const routes: Routes = [
  {
    path: '',
    component: Dam2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dam2PageRoutingModule {}
