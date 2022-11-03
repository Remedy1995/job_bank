import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { AuthguardService } from 'app/authguard.service';

import { AuthLayoutComponent } from './auth-layout.component';


export const AuthLayoutRoutes: Routes = [

  {path : 'login' ,component:AuthLayoutComponent}
];

