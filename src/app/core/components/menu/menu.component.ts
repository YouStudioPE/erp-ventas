import { Component, Input, OnInit } from '@angular/core';
import { MenuItems } from '@core/types';

@Component({
  selector: 'ys-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input()
  items: MenuItems;

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {}
}
