import { NgModule } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule],
})
export class FontIconsModule {
  constructor(private readonly library: FaIconLibrary) {
    this.library.addIconPacks(fas);
  }
}
