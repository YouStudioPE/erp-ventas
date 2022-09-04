import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {
    this.opened = true;
    this.mode = 'side';
  }

  ngOnInit(): void {}
}
