import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-misil2',
  templateUrl: './misil2.page.html',
  styleUrls: ['./misil2.page.scss'],
})
export class Misil2Page implements OnInit {

  abrirYoutube(){
    window.open('https://www.youtube.com/');
  }



  constructor(public toastController: ToastController) { }
   async presentToast() {
    const toast = await this.toastController.create({
      duration: 2000,
      message: 'Mensaje de prueba'
    });
    toast.present();
  }
  ngOnInit() {
  }

}
