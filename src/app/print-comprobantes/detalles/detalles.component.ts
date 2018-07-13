import { Component, ViewChild, Input } from '@angular/core';
import { AfterViewInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { IngresosService } from '../../servicios/ingresos.service';
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
  verDetalleItems: boolean;

  datosMovimientoDetalle = [];
  dataSource = this.datosMovimientoDetalle;
  displayedColumns: string[] = ['producto', 'cantidadEntrada', 'precioEntrada', 'importe'];
  
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
}
