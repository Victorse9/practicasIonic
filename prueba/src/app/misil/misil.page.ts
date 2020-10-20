import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misil',
  templateUrl: './misil.page.html',
  styleUrls: ['./misil.page.scss'],
})
export class MisilPage implements OnInit {

  poblacion = 'Membrilla';
  codigoPostal = '13230';
  constructor() { }

  ngOnInit() {
  }

}
