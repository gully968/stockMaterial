import { Component, OnInit, Input } from '@angular/core';
import { IngresosService } from '../../servicios/ingresos.service';
import { Observable } from 'rxjs/Observable';
import { MovimientosDetalle } from '../../clases/movimientos-detalle';
/* import { MovimientosDetalle } from '../../clases/movimientos-detalle'; */
/* import { Movimientos } from '../../clases/movimientos'; */

@Component({
  selector: 'app-ingresos-detalle',
  templateUrl: './ingresos-detalle.component.html',
  styleUrls: ['./ingresos-detalle.component.css']
})
export class IngresosDetalleComponent implements OnInit {

  private movDetalle: Observable<MovimientosDetalle>;

  constructor(public ingserv: IngresosService) { }

  ngOnInit(
  ) { 
    this.movDetalle = this.ingserv.muestraDetalle(ref);
   }

  

}
