import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddMoneyComponent } from 'app/add-money/add-money.component';
import { CreateUserComponent } from 'app/create-user/create-user/create-user.component';
import { AllUsersComponent } from 'app/all-users/all-users/all-users.component';
import { BlockUsersComponent } from 'app/blockusers/block-users/block-users.component';
import { ClientDepositComponent } from 'app/client-deposit/client-deposit/client-deposit.component';
import { AuthGuardService } from 'app/service/auth-guard.service';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'deposit',        component: AddMoneyComponent },
    {path:  'createuser',     component:CreateUserComponent},
    {path:  'allusers',       component:AllUsersComponent},
    {path:   'blocked',       component:BlockUsersComponent,canActivate:[AuthGuardService]},
   
 
];
