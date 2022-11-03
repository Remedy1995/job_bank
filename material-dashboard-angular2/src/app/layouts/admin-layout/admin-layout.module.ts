import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AddMoneyComponent } from 'app/add-money/add-money.component';
import { CreateUserComponent } from 'app/create-user/create-user/create-user.component';
import { AllUsersComponent } from 'app/all-users/all-users/all-users.component';
import { BlockUsersComponent } from 'app/blockusers/block-users/block-users.component';
import { ClientDepositComponent } from 'app/client-deposit/client-deposit/client-deposit.component';
import { ApiServiceService } from 'app/api-service.service';
import { AuthguardService } from 'app/authguard.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
   
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
   AddMoneyComponent,
   CreateUserComponent,
   AllUsersComponent,
   BlockUsersComponent,
  ],

  providers:[ApiServiceService,AuthguardService]
})

export class AdminLayoutModule {}
