import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { StecService } from '../../../servicios/stec.service';
import { Observable } from '../../../../../node_modules/rxjs';
import { Stec } from '../../../clases/stec';

@Component({
  selector: 'app-service-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnChanges {

  @Input() idReparacion: string;

  dataServicio: any;

  constructor(public sts: StecService) {  }

  ngOnInit() {
    if (this.idReparacion) {
    }
  }
  ngOnChanges() {
    if (this.idReparacion) {
      this.sts.devuelveDocServicio(this.idReparacion).then(datos => {
        this.dataServicio = datos;
      });
      console.log(this.dataServicio);
    }

  }
}
