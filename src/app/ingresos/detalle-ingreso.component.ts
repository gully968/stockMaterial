import { Component, OnInit, ViewChild } from '@angular/core';
import { IngresosComponent } from './ingresos.component';
import { DialogoComponent } from './ingresos.component';

@Component({
  selector: 'app-detalle-ingreso',
  templateUrl: './detalle-ingreso.component.html',
  styleUrls: ['./detalle-ingreso.component.css']
})
export class DetalleIngresoComponent implements OnInit {

  @ViewChild('child1') childOne: DialogoComponent;

  constructor() { }
 
  ngOnInit() {
    this.childOne.emitEvent
    .subscribe(
      res =>
      {
      console.log('Atributo:' + res);
      }
    );
  }

}
