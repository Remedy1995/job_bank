import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from 'app/client-dashboard/client-dashboard/client-dashboard.component';
import { RouterModule } from '@angular/router';
import { UserLayoutRoutes } from './user-layout.routing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClientDepositComponent } from 'app/client-deposit/client-deposit/client-deposit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ViewStatementComponent } from 'app/view-statement/view-statement.component';





@NgModule({
  declarations: [
    ClientDashboardComponent,
    ClientDepositComponent,
    ViewStatementComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    MatTooltipModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class UserLayoutModule { }
