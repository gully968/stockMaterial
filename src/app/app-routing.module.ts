import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
/* MODULOS PARA ROUTING */
import { AuthGuard } from './guards/auth.guard';
import { ProveedoresComponent } from './componentes/tablas/proveedores/proveedores.component';
import { ClientesComponent } from './componentes/tablas/clientes/clientes.component';
import { ProductosComponent } from './componentes/tablas/productos/productos.component';
import { RubrosComponent } from './componentes/tablas/rubros/rubros.component';
import { ListadoRubrosComponent } from './componentes/listados/listado-rubros/listado-rubros.component';
import { ListadoClientesComponent } from './componentes/listados/listado-clientes/listado-clientes.component';
import { ListadoProveedoresComponent } from './componentes/listados/listado-proveedores/listado-proveedores.component';
import { ListadoProductosComponent } from './componentes/listados/listado-productos/listado-productos.component';
import { ListadoPreciosComponent } from './componentes/listados/listado-precios/listado-precios.component';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { SalidasComponent } from './componentes/salidas/salidas.component';
import { PrintComprobantesComponent } from './componentes/print-comprobantes/print-comprobantes.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { StecComponent } from './componentes/stec/stec.component';
import { StecConsultaComponent } from './componentes/stec-consulta/stec-consulta.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { StecModificarComponent } from './componentes/stec-modificar/stec-modificar.component';
import { StecCerrarComponent } from './componentes/stec-cerrar/stec-cerrar.component';
import { MyDashboardComponent } from './componentes/my-dashboard/my-dashboard.component';


const routes: Routes = [
  { path: '', component: InicioComponent},
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
  { path: 'serviciotecnicoalta', component: StecComponent, canActivate: [AuthGuard]},
  { path: 'serviciotecnicoconsulta', component: StecConsultaComponent, canActivate: [AuthGuard]},
  { path: 'serviciotecnicomodifica', component: StecModificarComponent, canActivate: [AuthGuard]},
  { path: 'serviciotecnicocierra', component: StecCerrarComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: MyDashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}