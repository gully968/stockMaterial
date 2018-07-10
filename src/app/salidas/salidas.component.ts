import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';
import { ClientesService } from '../servicios/clientes.service';
import { ProductosService } from '../servicios/productos.service';
import { Movimientos } from '../clases/movimientos';
import { MovimientosDetalle } from '../clases/movimientos-detalle';
import { AngularFirestore } from 'angularfire2/firestore';
import { SalidasService } from '../servicios/salidas.service';

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
      const dia = fecBien.getDate(), mes=fecBien.getMonth()+1, anio = fecBien.getFullYear();
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

  editarEncabezado(){
    this.confirmaEnc = false;
  }

  blanqueoEncabezado(){
    this.item.fecha = '';
    this.item.cliente = '';
    this.item.referencia = '';
    this.item.observaciones = '';
    this.confirmaEnc = false;
  }

  agregarItem(ref, prod, cant, prec){
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
  selectedItem(prod){
    for (let i = 0; i < this.datosProducto.length; i++){
      if (this.datosProducto[i].nombre === prod.value) {
        this.itemdetalle.precioVenta =  this.datosProducto[i].precioVenta;
      }
    }
  }

}
