import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material.module';
import { DoctorComponent } from './components/dashbord/doctor/doctor.component';
import { PatientComponent } from './components/dashbord/patient/patient.component';
import { SliderComponent } from './components/dashbord/slider/slider.component';
import { AddDoctorComponent } from './components/dashbord/doctor/adddoctor/adddoctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletedoctorComponent } from './components/dashbord/doctor/deletedoctor/deletedoctor.component';
import { ViewdoctorComponent } from './components/dashbord/doctor/viewdoctor/viewdoctor.component';
import { AddPatientComponent } from './components/dashbord/patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './components/dashbord/patient/delete-patient/delete-patient.component';
import { ViewPatientComponent } from './components/dashbord/patient/view-patient/view-patient.component';
import { LoginComponent } from './components/auth/login/login.component';
// import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
// import { LoginComponent } from './component/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    SliderComponent,
    AddDoctorComponent,
    DeletedoctorComponent,
    ViewdoctorComponent,
    AddPatientComponent,
    DeletePatientComponent,
    ViewPatientComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }