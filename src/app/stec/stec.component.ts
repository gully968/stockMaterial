import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '../../../node_modules/@angular/material';
import { Stec } from '../clases/stec';
import { StecService } from '../servicios/stec.service';

@Component({
  selector: 'app-stec',
  templateUrl: './stec.component.html',
  styleUrls: ['./stec.component.css']
})
export class StecComponent implements OnInit {

  dataSource = new MatTableDataSource<Stec>();
  displayedColumns = [
        'fechaIngreso',
        'fechaRevision',
        'fechaEgreso',
        'cliente',
        'equipo',
        'fallaDeclarada',
        'fallaDetectada',
        'costoReparacion',
        'importeReparacion',
        'garantia',
        'estaReparado'
  ];

  item: Stec = {
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
  }

  constructor(public serv: StecService) { }

  ngOnInit() {
  }
  altaServicio(){
    this.serv.agregaServicio(this.item);
    console.log(this.item.fechaIngreso);
    console.log(this.item.fechaRevision);
  }
}
