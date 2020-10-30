import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {

  datos = [
    {
    asignatura: 'Acceso a Datos',
    isChecked: true,
    color: 'tertiary',
    icono: 'https://www.danysoft.com/wp-content/uploads/2014/04/base_datos_network_red_disco_duro-1210x423.jpg'
    },
    {
    asignatura: 'Desarrollo de Interfaces',
    isChecked: true,
    color: 'light',
    icono: 'https://www.ida.cl/wp-content/uploads/sites/5/2016/07/Disen%CC%83o-de-interfaces-a-la-medida-de-los-usuarios-v2.jpg'
  },
    {
    asignatura: 'Programación de Servicios',
    isChecked: true,
    color: 'dark',
    icono: 'https://lh3.googleusercontent.com/proxy/LnV6-GWWLhtss6f4QbGAyrf23ttoYMMcj6DROMkmhIBLXN7I4Zs8VEboPudDjEf0wAlea6UjjMalN03ZfyZQNHXEM7nWFHBya8x-383avXOVH2zhkA'
  },
    {
    asignatura: 'Programación Multimedia',
    isChecked: true,
    color: 'secondary',
    icono: 'https://img.freepik.com/vector-gratis/ilustracion-vector-tecnologia_53876-5319.jpg?size=626&ext=jpg'
    },
    {
    asignatura: 'Sistema de Gestion Empresarial',
    isChecked: true,
    color: 'danger',
    icono: 'https://herramientasempresariales.org/wp-content/uploads/2019/08/Gestion-Empresarial.jpg'
    },
    {
    asignatura: 'Empresas e Iniciativa',
    isChecked: true,
    color: 'warning',
    icono: 'https://media.sproutsocial.com/uploads/2018/01/Facebook-Messenger-for-Business-1.png'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
