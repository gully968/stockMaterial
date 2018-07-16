import { Component, ViewChild, Input } from '@angular/core';
import { AfterViewInit, OnChanges, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IngresosService } from '../../../servicios/ingresos.service';
import { EmpresaService } from '../../../servicios/empresa.service';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements AfterViewInit, OnChanges, OnInit {

  @Input () referencia: string;
  @Input () fecha: string;
  @Input () proveedor: string;
  @Input () observaciones: string;
  @Input () cliente: string;

  verDetalleItems: boolean;

  datosMovimientoDetalle = [];
  dataSource = this.datosMovimientoDetalle;
  displayedColumns: string[] = ['producto', 'cantidadEntrada', 'precioEntrada','cantidadSalida', 'precioVenta', 'importe'];

  empresa = [];

  constructor(public ingser: IngresosService,  public empser: EmpresaService) { 
   
  }

  ngAfterViewInit() {}
  ngOnChanges() {}
  ngOnInit(){
    this.empser.getEmpresaObservable().subscribe(dataemp => {
      this.empresa = dataemp;
    })
  }

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

  imprimirPDF(fec, prov, cli, ref, obs){

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
    doc.line(10, 12, 100, 12);
    doc.text(10, 15, this.empresa[0].nombreEmpresa);
    doc.text(10, 18, this.empresa[0].direccionEmpresa);
    doc.text(10, 21, this.empresa[0].telefonoEmpresa);
    doc.text(10, 24, this.empresa[0].mailEmpresa + '--IIBB: ' + this.empresa[0].iibbEmpresa);
    doc.line(10, 26, 100, 26);
    doc.text(10, 29, 'Fecha :' );
    doc.text(25, 29, fec);
    doc.text(70, 29, 'Ref: ');
    doc.text(80, 29, ref);
    if (prov) { 
      doc.text(10, 32, 'Proveedor: ');
      doc.text(25, 32, prov);
    } else {
      doc.text(10, 32, 'Cliente: ');
      doc.text(25, 32, cli);
    }
    doc.line(10, 34, 100, 34); // horizontal line
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
        importeTotal = importeTotal + datos[i].importe.valueOf();
        x = x + 5;
      }

      doc.line(10, x, 100, x); // horizontal line
      doc.text (10, x + 5,  'TOTAL:');
      doc.text (85, x + 5, importeTotal.toFixed(2).toString());
      doc.text (10, x + 10, 'Notas: ' + obs)
      doc.text (10, x + 15, 'Tipo de Movimiento: ' + tipoMov)
      doc.line(10, x + 18, 100, x + 18);
      doc.text(10, x + 21, 'CUIT: ' + this.empresa[0].cuitEmpresa)
      doc.text(50, x + 21, 'IIBB: ' + this.empresa[0].iibbEmpresa)
      doc.save(ref);
    });
  }
}
