import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/index';
import {
  ContentComponent,
  HeaderComponent,
  LayoutComponent,
  MenuComponent,
  SidenavComponent,
} from './components';
import { MenuService, ScreenSizeService } from './services';

@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
    SidenavComponent,
  ],
  imports: [SharedModule],
  exports: [LayoutComponent],
  providers: [MenuService, ScreenSizeService],
})
export class CoreModule {}
