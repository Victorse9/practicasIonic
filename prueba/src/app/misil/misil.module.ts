import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisilPageRoutingModule } from './misil-routing.module';

import { MisilPage } from './misil.page';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisilPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MisilPage]
})
export class MisilPageModule {}
