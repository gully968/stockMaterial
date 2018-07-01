import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Angular Material y Animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCheckboxModule,
         MatCard,
         MatInputModule,
         MatTableModule,
         MatPaginatorModule,
         MatSelectModule,
         MatTabsModule,
         MatSortModule } from '@angular/material';
import { } from '@angular/cdk';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

/* Firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

/* Componentes */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProveedoresComponent } from './tablas/proveedores/proveedores.component';
import { RubrosComponent } from './tablas/rubros/rubros.component';
import { ClientesComponent } from './tablas/clientes/clientes.component';
import { ListadoRubrosComponent } from './listados/listado-rubros/listado-rubros.component';
import { ListadoClientesComponent } from './listados/listado-clientes/listado-clientes.component';
import { ListadoProveedoresComponent } from './listados/listado-proveedores/listado-proveedores.component';
import { ProductosComponent } from './tablas/productos/productos.component';
import { ListadoProductosComponent } from './listados/listado-productos/listado-productos.component';
import { ListadoPreciosComponent } from './listados/listado-precios/listado-precios.component';
import { ConfirmBoxComponent } from './confirm-box.component';
/* Servicios */
import { ProveedoresService } from './servicios/proveedores.service';
import { ClientesService } from './servicios/clientes.service';
import { ProductosService } from './servicios/productos.service';
import { RubrosService } from './servicios/rubros.service';
import { firestore } from 'firebase';
@NgModule({
  declarations: [
    AppComponent,
    MatCard,
    ProveedoresComponent,
    ConfirmBoxComponent,
    ClientesComponent,
    RubrosComponent,
    ListadoRubrosComponent,
    ListadoClientesComponent,
    ListadoProveedoresComponent,
    ProductosComponent,
    ListadoProductosComponent,
    ListadoPreciosComponent
     ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule,
    /* Routings */
    AppRoutingModule,
    /* Angular Firestore */
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule.enablePersistence()
  ],
  
  entryComponents: [
    ConfirmBoxComponent
  ],
  providers: [
    ProveedoresService,
    ClientesService,
    ProductosService,
    RubrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
