import { Routes } from "@angular/router";
import { BlockUsersComponent } from "app/blockusers/block-users/block-users.component";
import { ClientDashboardComponent } from "app/client-dashboard/client-dashboard/client-dashboard.component";
import { ClientDepositComponent } from "app/client-deposit/client-deposit/client-deposit.component";
import { ViewStatementComponent } from "app/view-statement/view-statement.component";





export const UserLayoutRoutes:Routes=[
{path:'client',component:ClientDashboardComponent},
{path:'view-statement',component:ViewStatementComponent},
{path:'client-deposit',component:ClientDepositComponent}
]