import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './veiculos/editar/editar/editar.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'veiculos/:id/edit', component: EditarComponent },
  { path: 'veiculos/novo', component: EditarComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
