import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSelectModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common-components/app-header/app-header.component';
import { AppFooterComponent } from './common-components/app-footer/app-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSelectModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
