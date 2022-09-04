import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ScreenSize } from '@core/constants';
import { Observable, distinctUntilChanged, map } from 'rxjs';

@Injectable()
export class ScreenSizeService {
  private _screenSize$!: Observable<ScreenSize>;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.setScreenSize$();
  }

  get screenSize$() {
    return this._screenSize$;
  }

  private setScreenSize$() {
    const breakpointsToObserve = [
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ];

    this._screenSize$ = this.breakpointObserver
      .observe(breakpointsToObserve)
      .pipe(
        distinctUntilChanged(),
        map(() => this.mapToScreenSize())
      );
  }

  private mapToScreenSize(): ScreenSize {
    const tabletBreakpoints = [Breakpoints.Small, Breakpoints.Medium];
    const phoneBreakpoints = Breakpoints.XSmall;

    if (this.breakpointObserver.isMatched(phoneBreakpoints)) {
      return ScreenSize.PHONE;
    }

    if (this.breakpointObserver.isMatched(tabletBreakpoints)) {
      return ScreenSize.TABLET;
    }

    return ScreenSize.DESKTOP;
  }
}
