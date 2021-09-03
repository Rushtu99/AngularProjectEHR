import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';



//Components
import { AppComponent } from './app.component';
import { EHRloginDialogComponent } from './components/ehrlogin-dialog/ehrlogin-dialog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PatientChartComponent } from './components/patient-chart/patient-chart.component';
import { DashboardComponent } from './components/tabs/dashboard/dashboard.component';
import { ConsultationComponent } from './components/tabs/consultation/consultation.component';
import { DiagnosisComponent } from './components/tabs/diagnosis/diagnosis.component';
import { ProceduresComponent } from './components/tabs/procedures/procedures.component';
import { PrescriptionComponent } from './components/tabs/prescription/prescription.component';
import { DiagnosisDialogComponent } from './components/diagnosis-dialog/diagnosis-dialog.component';
import { PrescriptionDialogComponent } from './components/prescription-dialog/prescription-dialog.component';
import { NewMedicationComponent } from './components/new-medication/new-medication.component';

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    EHRloginDialogComponent,
    HeaderComponent,
    SidebarComponent,
    CalendarComponent,
    PatientChartComponent,
    DashboardComponent,
    ConsultationComponent,
    DiagnosisComponent,
    ProceduresComponent,
    PrescriptionComponent,
    DiagnosisDialogComponent,
    PrescriptionDialogComponent,
    NewMedicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatSidenavModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
