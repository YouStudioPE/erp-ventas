import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenSize } from '@core/constants';
import { ScreenSizeService } from '@core/services';
import { LayoutSize } from '@core/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ys-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  layoutSize: LayoutSize;

  private screenSizeSubs: Subscription;

  constructor(private readonly screenSizeService: ScreenSizeService) {
    this.screenSizeSubs = new Subscription();
    this.layoutSize = {
      isDesktop: false,
      isPhone: false,
      isTablet: false,
    };
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
        this.layoutSize = {
          isDesktop: screenSize === ScreenSize.DESKTOP,
          isPhone: screenSize === ScreenSize.PHONE,
          isTablet: screenSize === ScreenSize.TABLET,
        };
      }
    );
  }
}
