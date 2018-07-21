import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { StecService } from '../../../servicios/stec.service';
import { Stec } from '../../../clases/stec';

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

  regServicio: Stec = {
    fechaIngreso: '',
    fechaRevision: '',
    fechaEgreso: '',
    cliente: '',
    equipo: '',
    tecnico: '',
    fallaDeclarada: '',
    fallaDetectada: '',
    repuestos: '',
    costoReparacion: 0,
    importeReparacion: 0,
    estaReparado: false,
    garantia: '',
    observaciones: ''
  };

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
                    /* Aca reemplazo los valores del class stec */
                    this.regServicio.fechaIngreso = this.fechaIngreso;
                    this.regServicio.fechaRevision = this.fechaRevision;
                    this.regServicio.cliente = this.cliente;
                    this.regServicio.equipo = this.equipo;
                    this.regServicio.tecnico = this.tecnico;
                    this.regServicio.fallaDeclarada = this.fallaDeclarada;
                    this.regServicio.fallaDetectada = this.fallaDetectada;
                    this.regServicio.repuestos = this.repuestos;
                    this.regServicio.costoReparacion = this.costoReparacion;
                    this.regServicio.importeReparacion = this.importeReparacion;
                    this.regServicio.garantia = this.garantia;
                    this.regServicio.observaciones = this.observaciones;
                    this.regServicio.estaReparado = this.estaReparado;
              });
    } else {
      this.mostrarDatos = false;
    }
  }
  modificaReparado(){
    this.mostrarDatos = true;
    this.estaReparado = false;
  }
  
  onSubmit(datos){
    /* Armo registro de lo que tomo el submit para mandar al servicio como update */
    datos = {
      idReparacion: this.idReparacion,
      fechaIngreso: this.regServicio.fechaIngreso,
      fechaRevision: this.regServicio.fechaRevision,
      fechaEgreso: '',
      cliente: this.regServicio.cliente,
      equipo: this.regServicio.equipo,
      tecnico: this.regServicio.tecnico,
      fallaDeclarada: this.regServicio.fallaDeclarada,
      fallaDetectada: this.regServicio.fallaDetectada,
      repuestos: this.regServicio.repuestos,
      costoReparacion: this.regServicio.costoReparacion,
      importeReparacion: this.regServicio.importeReparacion,
      estaReparado: false,
      garantia: this.regServicio.garantia,
      observaciones: this.regServicio.observaciones
    }
    this.sts.modificaServicio(this.idReparacion,datos);
  }
    
}