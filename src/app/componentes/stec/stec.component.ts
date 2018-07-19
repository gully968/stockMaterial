import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Stec } from '../../clases/stec';
import { StecService } from '../../servicios/stec.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-stec',
  templateUrl: './stec.component.html',
  styleUrls: ['./stec.component.css']
})
export class StecComponent implements OnInit {

  dataSource = new MatTableDataSource<Stec>();
  displayedColumns = [
        'id',
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
    id: '',
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

  constructor(public serv: StecService, public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
  }
  altaServicio(){
    if (this.item.fechaIngreso &&
        this.item.fechaRevision &&
        this.item.cliente &&
        this.item.equipo &&
        this.item.tecnico &&
        this.item.fallaDeclarada)
        {
          const fecIngBien = new Date(this.item.fechaIngreso);
          const fecRevBien = new Date(this.item.fechaRevision);
          const diaIng = fecIngBien.getDate(),
                mesIng = fecIngBien.getMonth() + 1,
                anioIng = fecIngBien.getFullYear(),
                diaRev = fecRevBien.getDate(),
                mesRev = fecRevBien.getMonth() + 1,
                anioRev = fecRevBien.getFullYear();

          this.item.fechaIngreso = diaIng.toString() + '/' + mesIng.toString() + '/' + anioIng.toString();
          this.item.fechaRevision = diaRev.toString() + '/' + mesIng.toString() + '/' + anioRev.toString();
          this.serv.agregaServicio(this.item);
          this.flashMensaje.show('Servicio Técnico Agregado',{ cssClass: 'alert-success', timeout: 5000 });
          this.item.fechaIngreso = '';
          this.item.fechaRevision = '';
          this.item.cliente = '';
          this.item.equipo = '';
          this.item.tecnico = '';
          this.item.fallaDeclarada = '';
        }
  }
}
