import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';

import { AuthGuardService } from './service/auth-guard.service';
import { ApiServiceService } from './api-service.service';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';







@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule, 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
   
  
 
   
  
  


  ],
  providers: [ApiServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
