import { NgModule } from '@angular/core';
import { AngularModule } from './angular';
import { FontIconsModule } from './font-icons';

@NgModule({
  declarations: [],
  exports: [AngularModule, FontIconsModule],
})
export class SharedModule {}
