import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Angular Material y Animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
         MatCheckboxModule, 
         MatCard,
         MatInputModule,
         MatTableModule } from '@angular/material';
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
/* Servicios */
import { ProveedoresService } from './servicios/proveedores.service';

@NgModule({
  declarations: [
    AppComponent,
    MatCard,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    /* Material y Animations */
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    AppRoutingModule,
    /* Angular Firestore */
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule
  ],
  providers: [
    ProveedoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
