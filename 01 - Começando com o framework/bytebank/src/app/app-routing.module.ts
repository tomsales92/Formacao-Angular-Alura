import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaTransferenciaComponent } from './components/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';

const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
