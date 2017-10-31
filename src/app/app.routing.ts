import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';

export const  AppRoutesList  = [
        { path: 'login',  component: AppLoginComponent },
        { path: '',       component: HomeComponent },
        { path: 'signup', component: AppSignupComponent },
        { path: '**',     component: PageNotFoundComponent }
      ];
