import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
/* MODULOS PARA ROUTING */
import { ProveedoresComponent } from './tablas/proveedores/proveedores.component';
import { ClientesComponent } from './tablas/clientes/clientes.component';
import { RubrosComponent } from './tablas/rubros/rubros.component';
import { ListadoRubrosComponent } from './listados/listado-rubros/listado-rubros.component';

const routes: Routes = [
  { path: 'tabla-proveedores', component: ProveedoresComponent },
  { path: 'tabla-clientes', component: ClientesComponent },
  { path: 'tabla-rubros', component: RubrosComponent},
  { path: 'listado-rubros', component: ListadoRubrosComponent },
  { path: 'inicio', component: AppComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}