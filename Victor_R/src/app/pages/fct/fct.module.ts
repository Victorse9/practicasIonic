import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FctPageRoutingModule } from './fct-routing.module';

import { FctPage } from './fct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FctPageRoutingModule
  ],
  declarations: [FctPage]
})
export class FctPageModule {}
