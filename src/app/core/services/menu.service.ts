import { Injectable } from '@angular/core';
import { MenuItems } from '@core/types';

@Injectable()
export class MenuService {
  constructor() {}

  getItems(): MenuItems {
    return [
      {
        routelink: '',
        icon: ['fas', 'home'],
        label: 'Inicio',
      },
      {
        routelink: 'productos',
        icon: ['fas', 'box'],
        label: 'Productos',
      },
      {
        routelink: 'ventas',
        icon: ['fas', 'money-bill'],
        label: 'Ventas',
      },
    ];
  }
}
