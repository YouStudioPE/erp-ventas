import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '@core/services';
import { MenuItems } from '@core/types';

@Component({
  selector: 'ys-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input()
  opened: boolean;

  @Input()
  mode: 'side' | 'over';

  menuItems: MenuItems;

  constructor(private readonly menuService: MenuService) {
    this.opened = true;
    this.mode = 'side';
    this.menuItems = [];
  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  private getMenuItems(): void {
    this.menuItems = this.menuService.getItems();
  }
}
