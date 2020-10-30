import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dam2PageRoutingModule } from './dam2-routing.module';

import { Dam2Page } from './dam2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dam2PageRoutingModule
  ],
  declarations: [Dam2Page]
})
export class Dam2PageModule {}
