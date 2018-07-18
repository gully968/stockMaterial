import { Component, OnInit, Input } from '@angular/core';
import { StecService } from '../../../servicios/stec.service';

@Component({
  selector: 'app-service-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() idReparacion: string;

  titulo = '';
  registro: any ;
  constructor(public sts: StecService) { }
  
  ngOnInit() {
    if (this.idReparacion) {
      this.titulo = this.idReparacion;
    }
  }

}
