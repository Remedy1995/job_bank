import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard/client-dashboard.component';
import { AuthGuardService } from './service/auth-guard.service';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
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
