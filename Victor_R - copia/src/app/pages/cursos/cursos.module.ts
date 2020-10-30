import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosPageRoutingModule } from './cursos-routing.module';

import { CursosPage } from './cursos.page';
import { Routes } from '@angular/router';
import { TabsPage } from '../../../../../plantillaTabs/src/app/tabs/tabs.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosPageRoutingModule
  ],
  declarations: [CursosPage]
})
export class CursosPageModule {}
