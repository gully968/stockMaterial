import { Component, Inject, AfterViewInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';
import { ProductosService } from '../servicios/productos.service';
import { IngresosService } from '../servicios/ingresos.service';
import { Proveedores } from '../clases/proveedores';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements AfterViewInit {

  cantidad: 0;
  precioCompra: 0;
  dataProveedores = [];
  dataProductos = [];
  ingresoDetalle = {
    tipoMovimiento: 'Ingreso',
    fecha: '',
    referencia: '',
    producto: '',
    rubro: '',
    proveedor: '',
    cantidadEntrada: '',
    precioEntrada: '',
    observaciones: ''
  }
  constructor(public provserv: ProveedoresService, 
              public prodserv: ProductosService,
              public dialogo: MatDialog) { }

  ngAfterViewInit(){
    this.provserv.getProveedoresObservable().subscribe(data => { 
      this.dataProveedores = data;
    });
    
    console.log(this.dataProductos);
    console.log(this.dataProveedores);
  }

  openDialog(): void {
    const dialogRef = this.dialogo.open(DialogoComponent, {
      width: '900px',
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.dataProductos = result;
      console.log(this.dataProductos);
      console.log(this.cantidad);
      console.log(this.precioCompra);
    });
  }
}
/* Abre cuadro de dialogo para ingresar producto cantida y precio de compra */
@Component({
  selector: 'app-dialogo-ingreso',
  templateUrl: './dialogo-ingreso.html',
})
export class DialogoComponent implements AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<DialogoComponent>, public prodserv: ProductosService,
    
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
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