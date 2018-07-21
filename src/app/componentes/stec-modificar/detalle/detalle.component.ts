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
  fechaRevision: string;
  fechaEgreso: string;
  cliente: string;
  equipo: string;
  tecnico: string;
  fallaDeclarada: string;
  fallaDetectada: string;
  repuestos: string;
  costoReparacion: number;
  importeReparacion: number;
  estaReparado: boolean;
  garantia: string;
  observaciones: string;

  mostrarDatos: boolean;

  constructor(public sts: StecService) {  }

  ngOnInit() {
    this.mostrarDatos = false;
    if (this.idReparacion) {
      this.mostrarDatos = true;
    }
  }
  ngOnChanges() {
    if (this.idReparacion) {
      this.mostrarDatos = true;
      this.sts.devuelveDocServicio(this.idReparacion)
              .then(datos => {
                    this.dataServicio = datos;
                    this.fechaIngreso = this.dataServicio['fechaIngreso'];
                    this.fechaRevision = this.dataServicio['fechaRevision'];
                    this.cliente = this.dataServicio['cliente'];
                    this.equipo = this.dataServicio['equipo'];
                    this.tecnico = this.dataServicio['tecnico'];
                    this.fallaDeclarada = this.dataServicio['fallaDeclarada'];
                    this.fallaDetectada = this.dataServicio['fallaDetectada'];
                    this.repuestos = this.dataServicio['repuestos'];
                    this.costoReparacion = this.dataServicio['costoReparacion'];
                    this.importeReparacion = this.dataServicio['importeReparacion'];
                    this.estaReparado = this.dataServicio['estaReparado'];
                    this.garantia = this.dataServicio['garantia'];
                    this.observaciones = this.dataServicio['observaciones'];
              });
    } else {
      this.mostrarDatos = false;
    }
  }
}