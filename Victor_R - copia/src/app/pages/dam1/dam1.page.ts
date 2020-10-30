import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class Dam1Page implements OnInit {
  a1 = true;
  a2 = true;
  a3 = false;
  a4 = false;
  a5 = false;
  a6 = false;

  constructor(public toastController: ToastController) {}

  async tostadora1() {
    const toast = await this.toastController.create({
      duration: 600,
      message: 'Has seleccionado Base de Datos',
      position: 'bottom'
    });
    toast.present();
  }

  async tostadora2() {
    const toast = await this.toastController.create({
      duration: 600,
      message: 'Has seleccionado Programación',
      position: 'bottom'
    });
    toast.present();
  }

  async tostadora3() {
    const toast = await this.toastController.create({
      duration: 600,
      message: 'Has seleccionado Sistemas Informaticos',
      position: 'bottom'
    });
    toast.present();
  }

  async tostadora4() {
    const toast = await this.toastController.create({
      duration: 600,
      message: 'Has seleccionado Lenguaje de Marcas',
      position: 'bottom'
    });
    toast.present();
  }

  async tostadora5() {
    const toast = await this.toastController.create({
      duration: 600,
      message: 'Has seleccionado FOL',
      position: 'bottom'
    });
    toast.present();
  }

  async tostadora6() {
    const toast = await this.toastController.create({
      duration: 600,
      message: 'Has seleccionado Entornos de Desarrollo',
      position: 'bottom'
    });
    toast.present();
  }

    ngOnInit() {
  }

}
