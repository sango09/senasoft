import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {HttpClientModule} from '@angular/common/http';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './auth/login/login.component';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MainMedicoComponent } from './dashboardMedico/main-medico/main-medico.component';
import { HomeMedicoComponent } from './dashboardMedico/home-medico/home-medico.component';
import { DetallesPacientesComponent } from './dashboardMedico/detalles-pacientes/detalles-pacientes.component';
import { DetalllesFamiliasComponent } from './dashboardMedico/detallles-familias/detallles-familias.component';
import { PacientesAsociadosComponent } from './dashboardMedico/pacientes-asociados/pacientes-asociados.component';
import { RemitirPacientesComponent } from './dashboardMedico/remitir-pacientes/remitir-pacientes.component';
import { ListaRemitidosComponent } from './dashboardMedico/lista-remitidos/lista-remitidos.component';
import { AtenderCitaComponent } from './dashboardMedico/atender-cita/atender-cita.component';
import { ListaCitasComponent } from './dashboardMedico/lista-citas/lista-citas.component';
import { RemitirIncapacidadComponent } from './dashboardMedico/remitir-incapacidad/remitir-incapacidad.component';
import { RemitirExamenesComponent } from './dashboardMedico/remitir-examenes/remitir-examenes.component';
import { RemitirMedicamentosComponent } from './dashboardMedico/remitir-medicamentos/remitir-medicamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMedicoComponent,
    HomeMedicoComponent,
    DetallesPacientesComponent,
    DetalllesFamiliasComponent,
    PacientesAsociadosComponent,
    RemitirPacientesComponent,
    ListaRemitidosComponent,
    AtenderCitaComponent,
    ListaCitasComponent,
    RemitirIncapacidadComponent,
    RemitirExamenesComponent,
    RemitirMedicamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
