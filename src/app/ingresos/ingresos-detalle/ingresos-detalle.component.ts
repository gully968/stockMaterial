import { Component, OnInit, Input } from '@angular/core';
import { MovimientosDetalle } from '../../clases/movimientos-detalle';
import { Movimientos } from '../../clases/movimientos';

@Component({
  selector: 'app-ingresos-detalle',
  templateUrl: './ingresos-detalle.component.html',
  styleUrls: ['./ingresos-detalle.component.css']
})
export class IngresosDetalleComponent implements OnInit {

  itemdetalle: MovimientosDetalle = {
    referencia: '',
    producto: '',
    cantidadEntrada: 0,
    cantidadSalida: 0,
    precioEntrada: 0
  };
  item: Movimientos = {
    tipoMovimiento: '',
    fecha: '',
    referencia: '',
    proveedor: '',
    cliente: '',
    observaciones: '',
    totalFactura: 0,
    totalItems: 0
  };
  

  /* Registro Principal de movimiento */
  @Input () public movimientoFecha: string;
  @Input () public movimientoProveedor: string;
  @Input () public movimientoReferencia: string;
  @Input () public movimientoObservaciones: string;
  /* Registro detallado de movimiento */
  @Input () public movimientoDetalleReferencia: string;
  @Input () public movimientoDetalleProducto: string;
  @Input () public movimientoDetalleCantidadEntrada: number;
  @Input () public movimientoDetallePrecioEntrada: number;

  constructor() { }

  ngOnInit() {

  }
  agregarProductoLinea(ref, prod, cant, prec, fec, prov, obs ){
    this.itemdetalle = {
      referencia: ref,
      producto: prod,
      cantidadEntrada: cant,
      cantidadSalida: 0,
      precioEntrada: prec
    };

    this.item = { 
      tipoMovimiento: 'Ingreso',
      fecha: fec,
      referencia: ref,
      proveedor: prov,
      cliente: '---',
      observaciones: obs,
      totalFactura: 0,
      totalItems: 0
    };

    console.log(this.itemdetalle);
    console.log(this.item);
  }

}
