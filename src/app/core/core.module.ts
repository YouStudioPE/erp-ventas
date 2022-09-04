import { NgModule } from '@angular/core';
import { LayoutModule } from './layout';
import { ScreenSizeService } from './services';

@NgModule({
  declarations: [],
  imports: [],
  exports: [LayoutModule],
  providers: [ScreenSizeService],
})
export class CoreModule {}
