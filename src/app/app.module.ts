import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core';
import { AppComponent, AppRoutingModule } from './index';
import { LayoutModule } from './layout';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
