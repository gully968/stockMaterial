import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
/* MODULOS PARA ROUTING */
import { AuthGuard } from './guards/auth.guard';
import { ProveedoresComponent } from './tablas/proveedores/proveedores.component';
import { ClientesComponent } from './tablas/clientes/clientes.component';
import { ProductosComponent } from './tablas/productos/productos.component';
import { RubrosComponent } from './tablas/rubros/rubros.component';
import { ListadoRubrosComponent } from './listados/listado-rubros/listado-rubros.component';
import { ListadoClientesComponent } from './listados/listado-clientes/listado-clientes.component';
import { ListadoProveedoresComponent } from './listados/listado-proveedores/listado-proveedores.component';
import { ListadoProductosComponent } from './listados/listado-productos/listado-productos.component';
import { ListadoPreciosComponent } from './listados/listado-precios/listado-precios.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { SalidasComponent } from './salidas/salidas.component';
import { PrintComprobantesComponent } from './print-comprobantes/print-comprobantes.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'tabla-proveedores', component: ProveedoresComponent },
  { path: 'tabla-clientes', component: ClientesComponent, canActivate: [AuthGuard]},
  { path: 'tabla-productos', component: ProductosComponent, canActivate: [AuthGuard]},
  { path: 'tabla-rubros', component: RubrosComponent, canActivate: [AuthGuard]},
  { path: 'listado-proveedores', component: ListadoProveedoresComponent, canActivate: [AuthGuard]},
  { path: 'listado-clientes', component: ListadoClientesComponent, canActivate: [AuthGuard]},
  { path: 'listado-productos', component: ListadoProductosComponent, canActivate: [AuthGuard]},
  { path: 'listado-rubros', component: ListadoRubrosComponent, canActivate: [AuthGuard]},
  { path: 'listado-precios', component: ListadoPreciosComponent, canActivate: [AuthGuard]},
  { path: 'ingresos', component: IngresosComponent, canActivate: [AuthGuard]},
  { path: 'salidas', component: SalidasComponent, canActivate: [AuthGuard]},
  { path: 'comprobantes', component: PrintComprobantesComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}