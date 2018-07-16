import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { ProductosService } from '../../servicios/productos.service';
import { Movimientos } from '../../clases/movimientos';
import { MovimientosDetalle } from '../../clases/movimientos-detalle';
import { AngularFirestore } from 'angularfire2/firestore';
import { SalidasService } from '../../servicios/salidas.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit {

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

  itemdetalle: MovimientosDetalle = {
    id: '',
    referencia: '',
    producto: '',
    cantidadEntrada: 0,
    cantidadSalida: 0,
    precioEntrada: 0,
    precioVenta: 0,
    importe: 0
  };

  datosProveedor = [];      /* Creo el array para poner los datos del proveedor luego lo lleno en ngOnInit */
  datosProducto = [];       /* Creo el array para poner los datos de los productos luego etc.etc... */

  regMovimiento = this.item;                /* MODELO DE DATOS PARA ENCABEZADO DE MOVIMIENTO */
  regMovimientoDetalle = this.itemdetalle;  /* MODELO DE DATOS DEL DETALLE DEL MOVIMIENTO REFERENCIA CAMPO LINK */

  referenciaString = '';

  confirmaEnc = false;

  constructor(public salserv: SalidasService, public cliServ: ClientesService, public prodserv: ProductosService,
    public afs: AngularFirestore) { }

  ngOnInit() {
    this.cliServ.getClientesObservable().subscribe(dataprov => {
      this.datosProveedor = dataprov;
    });
    this.prodserv.getProductosObservable().subscribe(dataprod => {
      this.datosProducto = dataprod;
      this.itemdetalle.precioVenta = dataprod[0].precioVenta;
    });
  }
  confirmarEncabezado(fec, ref, prov, obs) {
    if (fec && ref && prov) {
      this.confirmaEnc = true;
      const fecBien = new Date(fec);
      const dia = fecBien.getDate(), mes = fecBien.getMonth() + 1, anio = fecBien.getFullYear();
      this.confirmaEnc = true;
      this.item.fecha = dia.toString() + '/' + mes.toString() + '/' + anio.toString();
      this.item.referencia = ref;
      this.item.tipoMovimiento = 'Salida';
      this.item.cliente = prov;
      this.item.observaciones = obs;
      /* Graba registro de encabezado */
      this.salserv.agregaEncabezado(this.item);
    } else {
      this.confirmaEnc = false;
    }
  }

  editarEncabezado() {
    this.confirmaEnc = false;
  }

  blanqueoEncabezado() {
    this.item.fecha = '';
    this.item.cliente = '';
    this.item.referencia = '';
    this.item.observaciones = '';
    this.confirmaEnc = false;
  }

  agregarItem(ref, prod, cant, prec) {
      this.itemdetalle.referencia = ref;
      this.itemdetalle.producto = prod;
      this.itemdetalle.cantidadSalida = cant;
      this.itemdetalle.precioVenta = prec;
      this.itemdetalle.importe = cant * prec;
      this.salserv.agregaDetalle(this.itemdetalle);
      /* RESTA la cantidad entrada a la existente en producto y lo reemplaza en la tabla productos */
      this.salserv.agregaCantidad(prod, cant);
      this.regMovimientoDetalle.producto = '';
      this.regMovimientoDetalle.cantidadSalida = 0;
      this.regMovimientoDetalle.precioVenta = 0;
  }
  selectedItem(prod) {
    for (let i = 0; i < this.datosProducto.length; i++) {
      if (this.datosProducto[i].nombre === prod.value) {
        this.itemdetalle.precioVenta =  this.datosProducto[i].precioVenta;
      }
    }
  }

  imprimirTicket(fec, cli, obs, ref) {

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
    doc.text(10, 25, 'Cliente: ');
    doc.text(25, 25, cli);
    doc.line(10, 30, 100, 30); // horizontal line
    doc.text(20, 38, 'Descripción', 'center');
    doc.text(50, 38, 'Cantidad', 'center');
    doc.text(70, 38, 'Precio Unit.', 'center');
    doc.text(90, 38, 'Importe', 'center');
    doc.line(10, 40, 100, 40); // horizontal line
    let itemsref: any[];
    let importeTotal: number;
    this.salserv.devuelveDetalleComprobante(ref).valueChanges().subscribe(datos => {
       itemsref = datos;
       importeTotal = 0;
       for (let i = 0; i < itemsref.length; i++) {
         doc.text (10, x, datos[i].producto, { width: 400 });
         doc.text (55, x, datos[i].cantidadSalida.toFixed(2).toString(), {align: 'right'});
         doc.text (75, x, datos[i].precioVenta.toFixed(2).toString(), {align: 'right'});
         doc.text (95, x, datos[i].importe.toFixed(2).toString(), {align: 'right'});
         importeTotal = importeTotal + datos[i].importe.valueOf();
         x = x + 5;
       }
       doc.line(10, x, 100, x); // horizontal line
       doc.text (10, x + 5,  'TOTAL:');
       doc.text (85, x + 5, importeTotal.toFixed(2).toString());
       doc.save('prueba.pdf');
    });

  }

}
