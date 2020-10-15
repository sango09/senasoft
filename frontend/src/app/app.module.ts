import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {HttpClientModule} from '@angular/common/http';
import {RatingModule} from 'primeng/rating';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './pacientes/main/main.component';
import { NavBarComponent } from './pacientes/nav-bar/nav-bar.component';
import { InicioComponent } from './pacientes/inicio/inicio.component';
import { AutorizacionComponent } from './pacientes/autorizacion/autorizacion.component';
import { CustomerService } from './pacientes/autorizacion/pacientesservice';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { IncapacidadesComponent } from './pacientes/incapacidades/incapacidades.component';
import { CambioMedicoComponent } from './pacientes/cambio-medico/cambio-medico.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CitasComponent } from './pacientes/citas/citas.component';
import { BeneficiariosComponent } from './pacientes/beneficiarios/beneficiarios.component';
import { AnadirFamiliarComponent } from './pacientes/anadir-familiar/anadir-familiar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    InicioComponent,
    AutorizacionComponent,
    IncapacidadesComponent,
    CambioMedicoComponent,
    CitasComponent,
    BeneficiariosComponent,
    AnadirFamiliarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent,MainComponent,NavBarComponent]
})
export class AppModule {
}
