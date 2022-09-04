import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/index';
import {
  ContentComponent,
  HeaderComponent,
  LayoutComponent,
  SidenavComponent,
} from './components';
import { ScreenSizeService } from './services';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    LayoutComponent,
  ],
  imports: [SharedModule],
  exports: [LayoutComponent],
  providers: [ScreenSizeService],
})
export class CoreModule {}
