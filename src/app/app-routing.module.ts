import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresComponent } from './tablas/proveedores/proveedores.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'tabla-proveedores', component: ProveedoresComponent },
  { path: 'inicio', component: AppComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}