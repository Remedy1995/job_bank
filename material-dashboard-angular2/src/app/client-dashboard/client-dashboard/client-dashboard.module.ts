import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    MatTooltipModule
  ]
})
export class ClientDashboardModule { }
