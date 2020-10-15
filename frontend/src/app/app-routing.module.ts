import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pacientes/inicio/inicio.component';
import { AutorizacionComponent } from './pacientes/autorizacion/autorizacion.component';
import { IncapacidadesComponent } from './pacientes/incapacidades/incapacidades.component';
import { CambioMedicoComponent } from './pacientes/cambio-medico/cambio-medico.component';
import { CitasComponent } from './pacientes/citas/citas.component';
import { BeneficiariosComponent } from './pacientes/beneficiarios/beneficiarios.component';
import { AnadirFamiliarComponent } from './pacientes/anadir-familiar/anadir-familiar.component';
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
import { MainPacientesComponent } from './pacientes/main-pacientes/main-pacientes.component';
import { CrearCitaComponent } from './pacientes/crear-cita/crear-cita.component';

const routes: Routes = [
  {path: 'mainPacientes', component: MainPacientesComponent,
  children: [
    {path: 'app-inicio', component: InicioComponent},
    {path: 'app-autorizacion', component: AutorizacionComponent},
    {path: 'app-incapacidades', component: IncapacidadesComponent},
    {path: 'app-cambio-medico', component: CambioMedicoComponent},
    {path: 'app-citas', component: CitasComponent},
    {path: 'app-beneficiarios', component: BeneficiariosComponent},
    {path: 'app-anadir-familiar', component: AnadirFamiliarComponent},
    {path: 'app-crear-cita', component: CrearCitaComponent}
  ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'medico', component: MainMedicoComponent,
  children: [
    {path: 'remitirExamenes', component: RemitirExamenesComponent},
    {path: 'remitirMedicamentos', component: RemitirMedicamentosComponent},
    {path: 'remitirIncapacidad', component: RemitirIncapacidadComponent},
    {path: 'listaCitas', component: ListaCitasComponent,},
    {path: 'atenderCita', component: AtenderCitaComponent,},
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
