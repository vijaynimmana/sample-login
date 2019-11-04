import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './phone/phone.component';
import { OtpComponent } from './otp/otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {path:'' , redirectTo:'/phone' , pathMatch:'full'},
  { path: 'phone', component: PhoneComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PhoneComponent,
  OtpComponent,
  DashboardComponent,
  HomeComponent,
  FeaturesComponent
]
