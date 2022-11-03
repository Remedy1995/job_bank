import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';
import { ApiServiceService } from './api-service.service';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthguardService } from './authguard.service';




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
    AuthLayoutComponent,
   
   

   
  
 
   
  
  


  ],
 providers:[ApiServiceService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
