import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { JewelryComponent } from './pages/jewelry/jewelry.component';
import { JewelryDetailsComponent } from './pages/jewelry-details/jewelry-details.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate : [AuthGuard]
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path:"jewelry/:id",
    component:JewelryDetailsComponent,
    canActivate : [AuthGuard]
  },
  {
    path:"jewelry",
    component:JewelryComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
