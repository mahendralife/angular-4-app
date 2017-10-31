import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoConflictStyleCompatibilityMode } from '@angular/material';

import { CommonModule } from '@angular/common';
// angular Bootstrap ui compoments
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// angular for module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
// angular routing
import { RouterModule, Routes } from '@angular/router';
import { AppRoutesList } from './app.routing';

import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common-components/app-header/app-header.component';
import { AppFooterComponent } from './common-components/app-footer/app-footer.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    AppLoginComponent,
    AppSignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    CommonModule,
    NoConflictStyleCompatibilityMode,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    RouterModule.forRoot( AppRoutesList,  { enableTracing: true }),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
