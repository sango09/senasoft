import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { main } from '@popperjs/core';
import { LoginComponent } from './auth/login/login.component';
import { DetallesPacientesComponent } from './dashboardMedico/detalles-pacientes/detalles-pacientes.component';
import { DetalllesFamiliasComponent } from './dashboardMedico/detallles-familias/detallles-familias.component';
import { HomeMedicoComponent } from './dashboardMedico/home-medico/home-medico.component';
import { MainMedicoComponent } from './dashboardMedico/main-medico/main-medico.component';
import { PacientesAsociadosComponent } from './dashboardMedico/pacientes-asociados/pacientes-asociados.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'medico', component: MainMedicoComponent,
  children: [
    
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
