import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';

/* Angular Material y Animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCheckboxModule,
       /*   MatCard, */
         MatInputModule,
         MatTableModule,
         MatPaginatorModule,
         MatSelectModule,
         MatTabsModule,
         MatDividerModule,
         MatSortModule,
         MatNativeDateModule, 
         MatCardModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';



/* import { } from '@angular/cdk'; */
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
import { IngresosComponent } from './ingresos/ingresos.component';
import { IngresosDetalleComponent } from './ingresos/ingresos-detalle/ingresos-detalle.component';
import { SalidasComponent } from './salidas/salidas.component';
import { SalidasDetalleComponent } from './salidas/salidas-detalle/salidas-detalle.component';
import { PrintComprobantesComponent } from './print-comprobantes/print-comprobantes.component';
import { EntradaComponent } from './print-comprobantes/entrada/entrada.component';
import { DetallesComponent } from './print-comprobantes/detalles/detalles.component';
import { LoginComponent } from './login/login.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { StecComponent } from './stec/stec.component';
import { ConfirmBoxComponent } from './confirm-box.component';

/* Servicios */
import { ProveedoresService } from './servicios/proveedores.service';
import { ClientesService } from './servicios/clientes.service';
import { ProductosService } from './servicios/productos.service';
import { RubrosService } from './servicios/rubros.service';
import { IngresosService } from './servicios/ingresos.service';
import { SalidasService } from './servicios/salidas.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './servicios/auth.service';
import { EmpresaService } from './servicios/empresa.service';
import { StecService } from './servicios/stec.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StecConsultaComponent } from './stec-consulta/stec-consulta.component';
@NgModule({
  declarations: [
    AppComponent,
   /*  MatCard, */
    ProveedoresComponent,
    ConfirmBoxComponent,
    ClientesComponent,
    RubrosComponent,
    ListadoRubrosComponent,
    ListadoClientesComponent,
    ListadoProveedoresComponent,
    ProductosComponent,
    ListadoProductosComponent,
    ListadoPreciosComponent,
    IngresosComponent,
    IngresosDetalleComponent,
    SalidasComponent,
    SalidasDetalleComponent,
    PrintComprobantesComponent,
    EntradaComponent,
    DetallesComponent,
    LoginComponent,
    MenuNavComponent,
    InicioComponent,
    StecComponent,
    StecConsultaComponent
    ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
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
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    /* Routings */
    AppRoutingModule,
    /* Angular Firestore */
    AngularFireAuthModule,
    FlashMessagesModule,
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
    RubrosService,
    IngresosService,
    SalidasService,
    AuthGuard,
    AuthService,
    EmpresaService,
    StecService,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
