import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { StecService } from '../../../servicios/stec.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-service-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnChanges {

  @Input() idReparacion: string;

  dataServicio: any;

  fechaIngreso: string;
  cliente: string;
  equipo: string;
  estaReparado: boolean;
  fallaDeclarada: string;
  fechaRev: string;

  constructor(public sts: StecService) {  }

  ngOnInit() {
    if (this.idReparacion) {
    }
  }
  ngOnChanges() {
    if (this.idReparacion) {
      this.sts.devuelveDocServicio(this.idReparacion)
              .then(datos => {
        this.dataServicio = datos;
        this.fechaIngreso = this.dataServicio['fechaIngreso']
        this.cliente = this.dataServicio['cliente'];
        this.equipo = this.dataServicio['equipo'];
        this.estaReparado = this.dataServicio['estaReparado'];
        this.fallaDeclarada = this.dataServicio['fallaDeclarada'];
        this.fechaRev = this.dataServicio['fechaRevision'];
      });
    }

  }
}