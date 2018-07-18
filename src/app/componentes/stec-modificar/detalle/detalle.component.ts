import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() idReparacion: string;

  titulo = '';
  constructor() { }

  ngOnInit() {
    if (this.idReparacion) {
      this.titulo = this.idReparacion;
      /* Deberia inicializar las variables desde servicio o mandar el doc??? mmmm */
    }
  }

}
