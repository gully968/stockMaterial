import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../servicios/ingresos.service';
import { ProveedoresService } from '../servicios/proveedores.service';
import { ProductosService } from '../servicios/productos.service';
import { Movimientos } from '../clases/movimientos';
import { MovimientosDetalle } from '../clases/movimientos-detalle';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

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
  
  /* En el constructor llamo a los servicios para realizar las diferentes operaciones */
  constructor(public ingserv: IngresosService, public provserv: ProveedoresService, public prodserv: ProductosService,
              public afs: AngularFirestore) { }

  /* El ngOnInit se ejecuta una vez que se despliega o inicia el template (creo) */
  ngOnInit() {
    /* Inicialmente lleno los valores de proveedores en un array previamente declarado (arribeño!) */
    this.provserv.getProveedoresObservable().subscribe(dataprov => {
      this.datosProveedor = dataprov;
    });
    this.prodserv.getProductosObservable().subscribe(dataprod => {
      this.datosProducto = dataprod;
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
      this.item.tipoMovimiento = 'Ingreso';
      this.item.proveedor = prov;
      this.item.observaciones = obs;
      /* Graba registro de encabezado */
      this.ingserv.agregaEncabezado(this.item);
    } else {
      this.confirmaEnc = false;
    }
  }

  editarEncabezado(){
    this.confirmaEnc = false;
  }

  blanqueoEncabezado(){
    this.item.fecha = '';
    this.item.proveedor = '';
    this.item.referencia = '';
    this.item.observaciones = '';
    this.confirmaEnc = false;
  }

  agregarItem(ref, prod, cant, prec){

    this.itemdetalle.referencia = ref;
    this.itemdetalle.producto = prod;
    this.itemdetalle.cantidadEntrada = cant;
    this.itemdetalle.precioEntrada = prec;
    this.ingserv.agregaDetalle(this.itemdetalle);
    /* Suma la cantidad existente en producto y la entrada y lo reemplaza en la tabla productos */
    this.ingserv.agregaCantidad(prod, cant);
    /* En caso que sea 0 el importe de compra es que no desea modificar y lo deja como esta, ver en el servicio */
    this.ingserv.agregaPrecio(prod, prec);
    this.regMovimientoDetalle.producto = '';
    this.regMovimientoDetalle.cantidadEntrada = 0;
    this.regMovimientoDetalle.precioEntrada = 0;

  }

}
