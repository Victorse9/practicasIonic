import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  name = 'Victor Rodriguez';
  url = 'https://lolesports.com/schedule?leagues=worlds,lec,european-masters,lcs,lck,lpl';
  activo = false;
  poblacion = 'Membrilla';
  codigoPostal = '13230';

  personas = [
    {
      nombre: 'Ana',
      apellido: 'Rodriguez',
      dni: '71122255E'
    },
    {
      nombre: 'Misil',
      apellido: 'Romero',
      dni: '71122211E'
    },
    {
      nombre: 'Alberto',
      apellido: 'Gonzalez',
      dni: '71122200A'
    }
  ];

  elementos = [
    {
      icono: 'airplane-outline',
      ruta: '/misil',
      titulo: 'Enlace Pagina misil'
    },
    {
      icono: 'log-out-outline',
      ruta: '/misil2',
      titulo: 'Enlace Pagina misil 2'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
