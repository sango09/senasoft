import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { main } from '@popperjs/core';
import { LoginComponent } from './auth/login/login.component';
import { AtenderCitaComponent } from './dashboardMedico/atender-cita/atender-cita.component';
import { DetallesPacientesComponent } from './dashboardMedico/detalles-pacientes/detalles-pacientes.component';
import { DetalllesFamiliasComponent } from './dashboardMedico/detallles-familias/detallles-familias.component';
import { HomeMedicoComponent } from './dashboardMedico/home-medico/home-medico.component';
import { ListaCitasComponent } from './dashboardMedico/lista-citas/lista-citas.component';
import { ListaRemitidosComponent } from './dashboardMedico/lista-remitidos/lista-remitidos.component';
import { MainMedicoComponent } from './dashboardMedico/main-medico/main-medico.component';
import { PacientesAsociadosComponent } from './dashboardMedico/pacientes-asociados/pacientes-asociados.component';
import { RemitirExamenesComponent } from './dashboardMedico/remitir-examenes/remitir-examenes.component';
import { RemitirIncapacidadComponent } from './dashboardMedico/remitir-incapacidad/remitir-incapacidad.component';
import { RemitirMedicamentosComponent } from './dashboardMedico/remitir-medicamentos/remitir-medicamentos.component';
import { RemitirPacientesComponent } from './dashboardMedico/remitir-pacientes/remitir-pacientes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'medico', component: MainMedicoComponent,
  children: [
    {path: 'remitirExamenes', component: RemitirExamenesComponent},
    {path: 'remitirMedicamentos', component: RemitirMedicamentosComponent},
    {path: 'remitirIncapacidad', component: RemitirIncapacidadComponent},
    {path: 'listaCitas', component: ListaCitasComponent},
    {path: 'atenderCita', component: AtenderCitaComponent},
    {path: 'remitirPaciente', component: RemitirPacientesComponent},
    {path: 'listaRemitidos', component: ListaRemitidosComponent},
    {path: 'homeMedico', component: HomeMedicoComponent},
    {path: 'detallesPacientes', component: DetallesPacientesComponent},
    {path: 'detallesFamilias', component: DetalllesFamiliasComponent, children: [
    {path: 'pacientesAsociados', component: PacientesAsociadosComponent},
    ]},
    {path: '**', component: HomeMedicoComponent},
  ]
},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
