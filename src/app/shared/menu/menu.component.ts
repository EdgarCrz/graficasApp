import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menu: MenuItem[] = [
    { ruta: '/graficas/barra', texto: 'Barras' },
    { ruta: '/graficas/barra-doble', texto: 'Barras Dobles' },
    { ruta: '/graficas/dona', texto: 'Dona' },
    { ruta: '/graficas/dona-http', texto: 'Dona Http' },
  ];
  // lo cargamos en un array para de esa forma poder repetirlo en nuestro html de una manera mas limpia con un ng for
  // esto se hizo para que podamos crear un menu, el cual podamos dirijirnos a las rutas que deseemos,
  // no basta con saber crear lazy load, si no tambien como emplearlo en nuestras apps y este es un gran ejemplo de como hacerlo
  // usa esto para tu portafolio
}
