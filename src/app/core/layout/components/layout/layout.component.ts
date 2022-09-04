import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScreenSize } from '@core/constants';
import { ScreenSizeService } from '@core/services';
import { LayoutSize } from '@core/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ys-layout',
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit, OnDestroy {
  sidenavVisible: boolean;

  sidenavMode: 'over' | 'side';

  private screenSizeSubs: Subscription;

  constructor(private readonly screenSizeService: ScreenSizeService) {
    this.sidenavVisible = true;
    this.sidenavMode = 'side';
    this.screenSizeSubs = new Subscription();
  }

  ngOnInit(): void {
    this.subscribeToScreenSize();
  }

  ngOnDestroy(): void {
    if (this.screenSizeSubs) {
      this.screenSizeSubs.unsubscribe();
    }
  }

  private subscribeToScreenSize(): void {
    this.screenSizeSubs = this.screenSizeService.screenSize$.subscribe(
      (screenSize) => {
        const isDesktop = screenSize === ScreenSize.DESKTOP;
        this.sidenavVisible = isDesktop;
        this.sidenavMode = isDesktop ? 'side' : 'over';
      }
    );
  }

  toggleSidenav() {
    this.sidenavVisible = !this.sidenavVisible;
  }
}
