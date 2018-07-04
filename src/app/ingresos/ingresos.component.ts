import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../servicios/ingresos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  variable = ''; 
  constructor(public ingserv: IngresosService) { }

  ngOnInit() {
    this.variable = 'cambio en componente principal';
  }

}
