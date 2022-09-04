import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
  @Output()
  onSidenavButtonClick: EventEmitter<void>;

  layoutSize: LayoutSize;

  private screenSizeSubs: Subscription;

  constructor(private readonly screenSizeService: ScreenSizeService) {
    this.screenSizeSubs = new Subscription();
    this.onSidenavButtonClick = new EventEmitter<void>();
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

  handleSidenavButtonClick() {
    this.onSidenavButtonClick.emit();
  }
}
