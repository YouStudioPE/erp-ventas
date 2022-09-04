import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/index';
import {
  ContentComponent,
  HeaderComponent,
  LayoutComponent,
  SidenavComponent,
} from './components';

@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    LayoutComponent,
    SidenavComponent,
  ],
  imports: [SharedModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
