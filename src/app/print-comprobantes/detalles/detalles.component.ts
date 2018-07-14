import { Component, ViewChild, Input } from '@angular/core';
import { AfterViewInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { IngresosService } from '../../servicios/ingresos.service';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements AfterViewInit, OnChanges {

  @Input () referencia: string;
  @Input () fecha: string;
  @Input () proveedor: string;
  @Input () observaciones: string;
  @Input () cliente: string;
  
  verDetalleItems: boolean;

  datosMovimientoDetalle = [];
  dataSource = this.datosMovimientoDetalle;
  displayedColumns: string[] = ['producto', 'cantidadEntrada', 'precioEntrada','cantidadSalida', 'precioVenta', 'importe'];
  
  constructor( public ingser: IngresosService) { }

  ngAfterViewInit() {}
  ngOnChanges() {}

  verDetalle(ref) {

    return this.ingser.detalleItem(ref).subscribe(datos => {
      this.verDetalleItems = true;
      this.datosMovimientoDetalle = datos;
      this.dataSource = datos;
    })
  }
  cerrarDetalle(){
    this.verDetalleItems = false;
  }

  imprimirPDF(fec, prov, ref, obs){
        /* Creo el pdf con los parametros iniciales */
        const doc = new jsPDF({
          orientation: 'p', /* P = Portrait  */
          unit: 'mm', /* Unidad de medidas que son usadas en el text */
          format: 'a4', /* Tamaño de hoja */
          hotfixes: [] /* Ni idea ??? */
          });
          
        doc.setFontSize(8);
        let x = 50;
        doc.text(50, 10, 'Comprobante no válido como Factura', 'center');
        doc.line(10, 12, 100, 12); // horizontal line
        doc.text(10, 20, 'Fecha :' );
        doc.text(25, 20, fec);
        doc.text(70, 20, 'Ref: ');
        doc.text(80, 20, ref);
        doc.text(10, 25, 'Proveedor: ');
        doc.text(25, 25, prov);
        doc.line(10, 30, 100, 30); // horizontal line
        doc.text(20, 38, 'Descripción', 'center');
        doc.text(50, 38, 'Cantidad', 'center');
        doc.text(70, 38, 'Precio Unit.', 'center');
        doc.text(90, 38, 'Importe', 'center');
        doc.line(10, 40, 100, 40); // horizontal line
        let itemsref: any[];
        let importeTotal: number;
        let tipoMov: string;
        this.ingser.devuelveDetalleComprobante(ref).valueChanges().subscribe(datos => {
           itemsref = datos;
           importeTotal = 0;
           for (let i = 0; i < itemsref.length; i++) {
             doc.text (10, x, datos[i].producto, { width: 400 });
             if (datos[i].cantidadEntrada > 0) {
               doc.text (55, x, datos[i].cantidadEntrada.toFixed(2).toString(), {align: 'right'});
               doc.text (75, x, datos[i].precioEntrada.toFixed(2).toString(), {align: 'right'});
               tipoMov = 'INGRESO';
              } else {
               doc.text (55, x, datos[i].cantidadSalida.toFixed(2).toString(), {align: 'right'});
               doc.text (75, x, datos[i].precioVenta.toFixed(2).toString(), {align: 'right'});
               tipoMov = 'SALIDA / VENTA';
             }
             doc.text (95, x, datos[i].importe.toFixed(2).toString(), {align: 'right'});
             console.log(datos[i].producto);
             console.log(datos[i].precioEntrada);
             console.log(datos[i].cantidadEntrada);
             console.log(datos[i].importe);
             importeTotal = importeTotal + datos[i].importe.valueOf();
             x = x + 5;
           }
           console.log(x);
           doc.line(10, x, 100, x); // horizontal line
           doc.text (10, x + 5,  'TOTAL:');
           doc.text (85, x + 5, importeTotal.toFixed(2).toString());
           doc.text (10, x + 10, 'Notas: ' + obs)
           doc.text (10, x + 15, 'Tipo de Movimiento: ' + tipoMov)
           doc.save(ref);
        });

  }
}
