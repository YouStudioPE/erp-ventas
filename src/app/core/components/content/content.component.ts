import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ys-content',
  styleUrls: ['./content.component.scss'],
  template: `<div class="content"><ng-content></ng-content></div> `,
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
