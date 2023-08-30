import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './components/dashbord/patient/patient.component';
import { DoctorComponent } from './components/dashbord/doctor/doctor.component';
import { ViewdoctorComponent } from './components/dashbord/doctor/viewdoctor/viewdoctor.component';
import { ViewPatientComponent } from './components/dashbord/patient/view-patient/view-patient.component';
import { AuthguardGuard } from './shared/guard/authguard.guard';
const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'dashboard', children :
  [
    {path : '', redirectTo: 'patient', pathMatch: 'full'},
    {path : 'patient', component: PatientComponent},
    {path : 'doctor', component: DoctorComponent},
    {path : 'doctor/:id', component: ViewdoctorComponent},
    {path : 'patient/:id', component: ViewPatientComponent,canActivate: [AuthguardGuard]},
  ]},
    {path : 'login', component : LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }