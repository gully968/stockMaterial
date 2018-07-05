import { Component, OnInit, Input, Output } from '@angular/core';
import { IngresosService } from '../servicios/ingresos.service';
import { ProveedoresService } from '../servicios/proveedores.service';
import { ProductosService } from '../servicios/productos.service';
import { Movimientos } from '../clases/movimientos';
import { MovimientosDetalle } from '../clases/movimientos-detalle';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  datosProveedor = [];      /* Creo el array para poner los datos del proveedor luego lo lleno en ngOnInit */
  datosProducto = [];       /* Creo el array para poner los datos de los productos luego etc.etc... */

  regMovimiento = Movimientos;                /* MODELO DE DATOS PARA ENCABEZADO DE MOVIMIENTO */
  regMovimientoDetalle = MovimientosDetalle;  /* MODELO DE DATOS DEL DETALLE DEL MOVIMIENTO REFERENCIA CAMPO LINK */

  referenciaString = '';

  /* En el constructor llamo a los servicios para realizar las diferentes operaciones */
  constructor(public ingserv: IngresosService, public provserv: ProveedoresService, public prodserv: ProductosService) { }

  /* El ngOnInit se ejecuta una vez que se despliega o inicia el template (creo) */
  ngOnInit() {
    /* Inicialmente lleno los valores de proveedores en un array previamente declarado (arribeño!) */
    this.provserv.getProveedoresObservable().subscribe(dataprov => {
      this.datosProveedor = dataprov;
    });
    this.prodserv.getProductosObservable().subscribe(dataprod => {
      this.datosProducto = dataprod;
    });
  };

  
}
