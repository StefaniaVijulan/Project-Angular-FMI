import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterService } from './register.service';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { JewelryComponent } from './pages/jewelry/jewelry.component';
import { JewelryDetailsComponent } from './pages/jewelry-details/jewelry-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    JewelryComponent,
    JewelryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [ RegisterService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
