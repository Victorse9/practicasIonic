import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Misil2PageRoutingModule } from './misil2-routing.module';

import { Misil2Page } from './misil2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Misil2PageRoutingModule
  ],
  declarations: [Misil2Page]
})
export class Misil2PageModule {}
