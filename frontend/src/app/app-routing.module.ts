import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pacientes/inicio/inicio.component';
import { AutorizacionComponent } from './pacientes/autorizacion/autorizacion.component'
import { IncapacidadesComponent } from './pacientes/incapacidades/incapacidades.component';
import { CambioMedicoComponent } from './pacientes/cambio-medico/cambio-medico.component';
import { CitasComponent } from './pacientes/citas/citas.component';
import { BeneficiariosComponent } from './pacientes/beneficiarios/beneficiarios.component';
import { AnadirFamiliarComponent } from './pacientes/anadir-familiar/anadir-familiar.component';

const routes: Routes = [
  {path: 'app-inicio', component: InicioComponent},
  {path: 'app-autorizacion', component: AutorizacionComponent},
  {path: 'app-incapacidades', component: IncapacidadesComponent},
  {path: 'app-cambio-medico', component: CambioMedicoComponent},
  {path: 'app-citas', component: CitasComponent},
  {path: 'app-beneficiarios', component: BeneficiariosComponent},
  {path: 'app-anadir-familiar', component: AnadirFamiliarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
