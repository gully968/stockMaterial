import { Component, Inject, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';
import { ProductosService } from '../servicios/productos.service';
import { IngresosService } from '../servicios/ingresos.service';
import { MovimientosDetalle } from '../clases/movimientos-detalle';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements AfterViewInit {

  dataProveedores = [];
  dataProductos = [];
  dataItems = [];

  movimientos = {
    tipoMovimiento: 'Ingreso',
    fecha: '',
    proveedor: '',
    referencia: '',
    observaciones: '',
  };

  constructor(public provserv: ProveedoresService,
              public prodserv: ProductosService,
              public dialogo: MatDialog) { }

  ngAfterViewInit(){
    this.provserv.getProveedoresObservable().subscribe(data => {
      this.dataProveedores = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialogo.open(DialogoComponent, {
      width: '900px',
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.dataItems = result;
      console.log('Data items:', this.dataItems)
    });
  }
}
/* Abre cuadro de dialogo para ingresar producto cantida y precio de compra */
@Component({
  selector: 'app-dialogo-ingreso',
  templateUrl: './dialogo-ingreso.html',
})
export class DialogoComponent implements AfterViewInit {

  movimientosDetalle = {
    referencia: '',
    producto: '',
    cantidadEntrada: 0,
    precioEntrada: 0
  };

  constructor(
    public dialogRef: MatDialogRef<DialogoComponent>, public prodserv: ProductosService,

    @Inject(MAT_DIALOG_DATA) public data: MovimientosDetalle) {}

    @Output () emitEvent: EventEmitter<any> = new EventEmitter<any>();

    dataProductos = [];

    ngAfterViewInit(){
      this.prodserv.getProductosObservable().subscribe(data => {
        this.dataProductos = data;
      });
    }

    onNoClick(): void {
    this.dialogRef.close();
    }
}