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
import { ProveedoresComponent } from './componentes/tablas/proveedores/proveedores.component';
import { RubrosComponent } from './componentes/tablas/rubros/rubros.component';
import { ClientesComponent } from './componentes/tablas/clientes/clientes.component';
import { ListadoRubrosComponent } from './componentes/listados/listado-rubros/listado-rubros.component';
import { ListadoClientesComponent } from './componentes/listados/listado-clientes/listado-clientes.component';
import { ListadoProveedoresComponent } from './componentes/listados/listado-proveedores/listado-proveedores.component';
import { ProductosComponent } from './componentes/tablas/productos/productos.component';
import { ListadoProductosComponent } from './componentes/listados/listado-productos/listado-productos.component';
import { ListadoPreciosComponent } from './componentes/listados/listado-precios/listado-precios.component';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { IngresosDetalleComponent } from './componentes/ingresos/ingresos-detalle/ingresos-detalle.component';
import { SalidasComponent } from './componentes/salidas/salidas.component';
import { SalidasDetalleComponent } from './componentes/salidas/salidas-detalle/salidas-detalle.component';
import { PrintComprobantesComponent } from './componentes/print-comprobantes/print-comprobantes.component';
import { EntradaComponent } from './componentes/print-comprobantes/entrada/entrada.component';
import { DetallesComponent } from './componentes/print-comprobantes/detalles/detalles.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuNavComponent } from './componentes/menu-nav/menu-nav.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { StecComponent } from './componentes/stec/stec.component';
import { StecConsultaComponent } from './componentes/stec-consulta/stec-consulta.component';
import { StecModificarComponent } from './componentes/stec-modificar/stec-modificar.component';
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
import { RegistroComponent } from './componentes/registro/registro.component';
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
    StecConsultaComponent,
    StecModificarComponent,
    RegistroComponent
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
