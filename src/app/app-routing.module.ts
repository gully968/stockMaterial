import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
/* MODULOS PARA ROUTING */
import { ProveedoresComponent } from './tablas/proveedores/proveedores.component';
import { ClientesComponent } from './tablas/clientes/clientes.component';
import { ProductosComponent } from './tablas/productos/productos.component';
import { RubrosComponent } from './tablas/rubros/rubros.component';
import { ListadoRubrosComponent } from './listados/listado-rubros/listado-rubros.component';
import { ListadoClientesComponent } from './listados/listado-clientes/listado-clientes.component';
import { ListadoProveedoresComponent } from './listados/listado-proveedores/listado-proveedores.component';
import { ListadoProductosComponent } from './listados/listado-productos/listado-productos.component';

const routes: Routes = [
  { path: 'tabla-proveedores', component: ProveedoresComponent },
  { path: 'tabla-clientes', component: ClientesComponent },
  { path: 'tabla-productos', component: ProductosComponent },
  { path: 'tabla-rubros', component: RubrosComponent},
  { path: 'listado-proveedores', component: ListadoProveedoresComponent },
  { path: 'listado-clientes', component: ListadoClientesComponent },
  { path: 'listado-productos', component: ListadoProductosComponent },
  { path: 'listado-rubros', component: ListadoRubrosComponent },
  { path: 'inicio', component: AppComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}