import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard/client-dashboard.component';
import { AuthGuardService } from './service/auth-guard.service';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate:[AuthGuardService],
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
    path:'',
    component:UserLayoutComponent,
   
    children:[
      {
        path:'',
        loadChildren:()=>import('./layouts/user-layout/user-layout.module').then(m=>(m.UserLayoutModule))
      }
    ]
  },
  {
    path:'',
    component:AuthLayoutComponent,

    children:[
      {
        path:'',
        loadChildren:()=>import('./layouts/auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)
      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
